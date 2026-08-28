// ── Runtime content store ───────────────────────────────────────
// Resolution order (highest wins):
//   1. local draft in localStorage  → edits made in the dashboard on this device
//   2. public/portfolio.json        → the published snapshot, committed to git
//   3. src/data/*.ts                → seed data shipped with the code
//
// Publishing = export the JSON from the dashboard, drop it in public/portfolio.json,
// commit, redeploy. Everything else stays a local draft.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import {
  defaultContent,
  normalizeContent,
  toPublicContent,
} from "./content";
import type { ContentKey, PortfolioContent, PublicContent } from "./content";

const DRAFT_KEY = "nazem.portfolio.draft.v1";

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
    // Most likely the 5 MB quota — usually a base64 image that is too large.
    return { ok: false as const, error: error as Error };
  }
}

interface PortfolioContextValue {
  content: PortfolioContent;
  publicContent: PublicContent;
  hasDraft: boolean;
  /** Replace one top-level section and persist. */
  updateSection: <K extends ContentKey>(
    key: K,
    value: PortfolioContent[K]
  ) => void;
  /** Replace the whole document (import / restore). */
  replaceContent: (next: PortfolioContent) => void;
  /** Drop the local draft and fall back to the published/seed content. */
  discardDraft: () => void;
  /** Drop everything and go back to the code-level seed data. */
  resetToSeed: () => void;
  lastError: string | null;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PortfolioContent>(
    () => readDraft() ?? defaultContent()
  );
  const [hasDraft, setHasDraft] = useState(() => readDraft() !== null);
  const [lastError, setLastError] = useState<string | null>(null);
  const publishedRef = useRef<PortfolioContent | null>(null);

  // Pull the published snapshot once. It only takes effect when there is no
  // local draft — a draft always represents newer, intentional edits.
  useEffect(() => {
    let cancelled = false;
    const url = `${import.meta.env.BASE_URL}portfolio.json`;

    fetch(url, { cache: "no-cache" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json) => {
        if (cancelled) return;
        const published = normalizeContent(json);
        publishedRef.current = published;
        if (!readDraft()) setContent(published);
      })
      .catch(() => {
        // No published snapshot yet — seed data is the correct fallback.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const persist = useCallback((next: PortfolioContent) => {
    setContent(next);
    const result = writeDraft(next);
    if (result.ok) {
      setHasDraft(true);
      setLastError(null);
    } else {
      setLastError(
        "Could not save locally — browser storage is full. Large images stored as base64 are the usual cause; use an image URL or a file under /public instead."
      );
    }
  }, []);

  const updateSection = useCallback<PortfolioContextValue["updateSection"]>(
    (key, value) => {
      setContent((current) => {
        const next = {
          ...current,
          [key]: value,
          updatedAt: new Date().toISOString(),
        };
        const result = writeDraft(next);
        if (result.ok) {
          setHasDraft(true);
          setLastError(null);
        } else {
          setLastError(
            "Could not save locally — browser storage is full. Large images stored as base64 are the usual cause; use an image URL or a file under /public instead."
          );
        }
        return next;
      });
    },
    []
  );

  const replaceContent = useCallback(
    (next: PortfolioContent) => {
      persist({ ...normalizeContent(next), updatedAt: new Date().toISOString() });
    },
    [persist]
  );

  const discardDraft = useCallback(() => {
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    setLastError(null);
    setContent(publishedRef.current ?? defaultContent());
  }, []);

  const resetToSeed = useCallback(() => {
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    setLastError(null);
    setContent(defaultContent());
  }, []);

  const value = useMemo<PortfolioContextValue>(
    () => ({
      content,
      publicContent: toPublicContent(content),
      hasDraft,
      updateSection,
      replaceContent,
      discardDraft,
      resetToSeed,
      lastError,
    }),
    [
      content,
      hasDraft,
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
