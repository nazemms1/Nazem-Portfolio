// ── Dashboard passcode gate ─────────────────────────────────────
// This is a *local* lock, not server-side security: the site is fully static,
// so everything the dashboard edits is public data anyway. The gate exists so
// the panel is not one click away on a shared machine, and so an accidental
// visit to #/admin does not open an editor. Never put secrets in here.

const PASS_KEY = "nazem.portfolio.admin.pass.v1";
const SESSION_KEY = "nazem.portfolio.admin.session.v1";

async function hash(passcode: string): Promise<string> {
  const bytes = new TextEncoder().encode(`nazem-portfolio::${passcode}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function isPasscodeSet(): boolean {
  return Boolean(localStorage.getItem(PASS_KEY));
}

export async function setPasscode(passcode: string): Promise<void> {
  localStorage.setItem(PASS_KEY, await hash(passcode));
  sessionStorage.setItem(SESSION_KEY, "1");
}

export async function verifyPasscode(passcode: string): Promise<boolean> {
  const stored = localStorage.getItem(PASS_KEY);
  if (!stored) return false;
  const ok = stored === (await hash(passcode));
  if (ok) sessionStorage.setItem(SESSION_KEY, "1");
  return ok;
}

export function isUnlocked(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

export function lock(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

/** Forget the passcode entirely — next visit asks to create a new one. */
export function clearPasscode(): void {
  localStorage.removeItem(PASS_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}
