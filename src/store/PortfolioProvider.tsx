import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  defaultContent,
  normalizeContent,
  toPublicContent,
} from "./content";
import type { ContentKey, PortfolioContent, PublicContent } from "./content";

const DRAFT_KEY = "nazem.portfolio.draft.v1";
const PORTFOLIO_DOC_REF = doc(db, "portfolio", "content");

function readDraft(): PortfolioContent | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? normalizeContent(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

function writeDraft(content: PortfolioContent) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(content));
    return { ok: true as const };
  } catch (error) {
    return { ok: false as const, error: error as Error };
  }
}

interface PortfolioContextValue {
  content: PortfolioContent;
  publicContent: PublicContent;
  hasDraft: boolean;
  isFirebaseSynced: boolean;
  isLoading: boolean;
  /** Replace one top-level section and persist to Firestore. */
  updateSection: <K extends ContentKey>(
    key: K,
    value: PortfolioContent[K]
  ) => Promise<void>;
  /** Replace the whole document in Firestore. */
  replaceContent: (next: PortfolioContent) => Promise<void>;
  /** Drop local overrides and re-sync with Firestore document. */
  discardDraft: () => void;
  /** Reset Firestore and local data to seed defaults. */
  resetToSeed: () => Promise<void>;
  lastError: string | null;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PortfolioContent>(
    () => readDraft() ?? defaultContent()
  );
  const [hasDraft, setHasDraft] = useState(() => readDraft() !== null);
  const [isFirebaseSynced, setIsFirebaseSynced] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastError, setLastError] = useState<string | null>(null);

  // Subscribe to real-time updates from Firestore
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(
      PORTFOLIO_DOC_REF,
      async (snapshot) => {
        setIsLoading(false);
        if (snapshot.exists()) {
          const remoteData = normalizeContent(snapshot.data());
          setContent(remoteData);
          setIsFirebaseSynced(true);
          setLastError(null);
        } else {
          // First initialization: push default content to Firestore
          try {
            const seed = defaultContent();
            await setDoc(PORTFOLIO_DOC_REF, seed);
            setContent(seed);
            setIsFirebaseSynced(true);
          } catch (err) {
            console.error("Error initializing Firestore content:", err);
            setLastError("Failed to initialize remote database. Using local fallback.");
          }
        }
      },
      (error) => {
        console.warn("Firestore snapshot error (using local fallback):", error);
        setIsLoading(false);
        setIsFirebaseSynced(false);
        if (error.code === "permission-denied") {
          setLastError(
            "Database error: Permission denied. Please check cloud database security rules."
          );
        } else {
          setLastError(
            `Cloud database error (${error.message || error.code}). Using local fallback.`
          );
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const saveToFirestoreAndLocal = useCallback(
    async (next: PortfolioContent) => {
      const updated = {
        ...normalizeContent(next),
        updatedAt: new Date().toISOString(),
      };
      setContent(updated);
      writeDraft(updated);

      try {
        await setDoc(PORTFOLIO_DOC_REF, updated);
        setIsFirebaseSynced(true);
        setLastError(null);
      } catch (err) {
        console.error("Error persisting to database:", err);
        setIsFirebaseSynced(false);
        setLastError(
          "Could not save to cloud database. Saved locally in browser."
        );
      }
    },
    []
  );

  const updateSection = useCallback<PortfolioContextValue["updateSection"]>(
    async (key, value) => {
      const next = {
        ...content,
        [key]: value,
      };
      await saveToFirestoreAndLocal(next);
    },
    [content, saveToFirestoreAndLocal]
  );

  const replaceContent = useCallback(
    async (next: PortfolioContent) => {
      await saveToFirestoreAndLocal(next);
    },
    [saveToFirestoreAndLocal]
  );

  const discardDraft = useCallback(() => {
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    setLastError(null);
  }, []);

  const resetToSeed = useCallback(async () => {
    const seed = defaultContent();
    await saveToFirestoreAndLocal(seed);
  }, [saveToFirestoreAndLocal]);

  const value = useMemo<PortfolioContextValue>(
    () => ({
      content,
      publicContent: toPublicContent(content),
      hasDraft,
      isFirebaseSynced,
      isLoading,
      updateSection,
      replaceContent,
      discardDraft,
      resetToSeed,
      lastError,
    }),
    [
      content,
      hasDraft,
      isFirebaseSynced,
      isLoading,
      updateSection,
      replaceContent,
      discardDraft,
      resetToSeed,
      lastError,
    ]
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolioStore() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolioStore must be used inside <PortfolioProvider>");
  }
  return ctx;
}

/** Read-only view for the public site — hidden entries already stripped. */
export function usePortfolio() {
  return usePortfolioStore().publicContent;
}
