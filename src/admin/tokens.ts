// ── Dashboard design tokens ─────────────────────────────────────
// The public site is a dark editorial page; the dashboard is a working tool.
// It shares the site's blue accent but uses flatter, higher-contrast surfaces
// so dense lists and forms stay readable for long editing sessions.

export const AD = {
  bg: "#0a0c11",
  surface: "#101319",
  surfaceHover: "#151922",
  surfaceRaised: "#171b24",
  border: "#1f2531",
  borderStrong: "#2a3242",

  accent: "#3b82f6",
  accentSoft: "rgba(59,130,246,0.12)",
  accentBorder: "rgba(59,130,246,0.35)",

  text: "#e8ecf3",
  textSoft: "#9aa7b8",
  textMuted: "#6b7787",
  textFaint: "#414b5a",

  danger: "#f87171",
  warning: "#fbbf24",
  success: "#34d399",

  radius: 14,
  radiusSm: 10,
  navWidth: 248,
  headerHeight: 62,
} as const;

export const AD_FONT = {
  sans: "'Inter', system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

/** Standard panel/card surface. */
export const cardStyle = {
  background: AD.surface,
  border: `1px solid ${AD.border}`,
  borderRadius: AD.radius,
} as const;
