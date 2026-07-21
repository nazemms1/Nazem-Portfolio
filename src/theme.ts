import { createTheme } from "@mantine/core";

/**
 * Color tokens — navy/blue palette, refined for a minimal-premium system.
 *
 * Background: near-black (#08090b) → card surface (#0d1117) → elevated (#111826)
 * Primary:    Blue  #3b82f6 (blue-500)
 * Deep:       Navy  #1d4ed8 (blue-700)
 * Accent:     Indigo #6366f1 — used sparingly for secondary emphasis
 *
 * Same hues as before; contrast and application refined (fewer competing
 * gradients, consistent border/glow opacities, higher body-text contrast).
 */
export const theme = createTheme({
  primaryColor: "cyan",

  colors: {
    dark: [
      "#eef1f5", // 0 body text (brighter for AA contrast on #08090b)
      "#cbd5e1", // 1
      "#94a3b8", // 2 dimmed
      "#64748b", // 3
      "#334155", // 4 subtle borders
      "#1b2333", // 5 card borders
      "#0d1117", // 6 card bg
      "#08090b", // 7 page bg
      "#08090b", // 8
      "#000000", // 9
    ],
    cyan: [
      "#eff6ff", // 0
      "#dbeafe", // 1
      "#bfdbfe", // 2
      "#93c5fd", // 3
      "#60a5fa", // 4
      "#3b82f6", // 5 — primary accent
      "#2563eb", // 6 — primary button bg
      "#1d4ed8", // 7 — deep navy
      "#1e40af", // 8
      "#1e3a8a", // 9 — darkest navy
    ],
  },

  defaultRadius: "md",

  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",

  headings: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "clamp(2.6rem, 6vw, 4.4rem)", lineHeight: "1.05" },
      h2: { fontSize: "clamp(2rem, 4.4vw, 3.2rem)", lineHeight: "1.1" },
      h3: { fontSize: "1.3rem", lineHeight: "1.35" },
    },
  },

  shadows: {
    xs: "0 1px 3px rgba(0,0,0,0.5)",
    sm: "0 2px 8px rgba(0,0,0,0.4)",
    md: "0 4px 16px rgba(0,0,0,0.45)",
    lg: "0 8px 32px rgba(0,0,0,0.5)",
    xl: "0 16px 56px rgba(0,0,0,0.55)",
  },

  components: {
    Container: {
      // defaultProps: { px: { base: 24, sm: 40, lg: 64 } },
    },
    Card: {
      defaultProps: { withBorder: false },
      styles: {
        root: {
          background: "rgba(13,17,23,0.85)",
          border: "1px solid rgba(27,35,51,0.9)",
          transition:
            "border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease",
        },
      },
    },
    Badge: {
      styles: {
        root: {
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontSize: "0.68rem",
        },
      },
    },
    Button: {
      styles: {
        root: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.01em",
          transition:
            "transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease",
        },
      },
    },
    Text: {
      styles: {
        root: { lineHeight: 1.75 },
      },
    },
  },
});
