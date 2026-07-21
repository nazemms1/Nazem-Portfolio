// ── Shared design tokens ────────────────────────────────────────
// Single source of truth for the palette already established in theme.ts.
// Reused across every section so hues/opacities stay consistent.

export const COLOR = {
  bg: "#08090b",
  surface: "#0d1117",
  surfaceElevated: "#111826",
  border: "#1b2333",
  borderStrong: "#242e42",

  navy: "#1d4ed8", // deep primary
  blue: "#3b82f6", // primary accent
  blueLight: "#93c5fd",
  indigo: "#6366f1", // secondary accent
  indigoLight: "#a5b4fc",

  textPrimary: "#eef1f5",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  textFaint: "#334155",
} as const;

export const FONT = {
  sans: "'Inter', system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_SNAP = [0.16, 1, 0.3, 1] as const;

export const gradientText = {
  background: `linear-gradient(120deg, ${COLOR.blueLight} 0%, ${COLOR.blue} 45%, ${COLOR.indigoLight} 100%)`,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

// Glassmorphism — frosted surfaces used across cards, panels, and nav.
// backdropFilter needs the Webkit prefix for Safari. Each variant pairs blur
// with an inset top highlight + soft outer glow so the frosted edge reads
// against AmbientBackground's color blobs (a flat black page gives blur
// nothing to refract, so the glow layer is what makes this visible at all).
export const glass = {
  panel: {
    background:
      "linear-gradient(165deg, rgba(255,255,255,0.06) 0%, rgba(17,24,38,0.5) 40%)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 0 40px rgba(255,255,255,0.03), 0 8px 32px rgba(0,0,0,0.4)",
  },
  card: {
    background:
      "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(15,23,42,0.4) 45%)",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 32px rgba(255,255,255,0.02), 0 8px 24px rgba(0,0,0,0.35)",
  },
  nav: {
    background: "rgba(8,9,11,0.5)",
    backdropFilter: "blur(24px) saturate(180%)",
    WebkitBackdropFilter: "blur(24px) saturate(180%)",
    boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.06)",
  },
} as const;
