import { createTheme } from "@mantine/core";

/**
 * Color tokens — navy-based palette
 *
 * Primary:   Navy  #1d4ed8  (blue-700)
 * Highlight: Blue  #3b82f6  (blue-500)  — lighter end of gradients
 * Accent:    Indigo #6366f1              — replaces violet in primary contexts
 *
 * Use `cyan` color key in Mantine so all variant="gradient" + color="cyan"
 * calls resolve to these navy shades automatically.
 */
export const theme = createTheme({
  primaryColor: "cyan",

  colors: {
    dark: [
      "#e2e8f0", // 0 body text
      "#cbd5e1", // 1
      "#94a3b8", // 2 dimmed
      "#64748b", // 3
      "#334155", // 4 subtle borders
      "#1e293b", // 5 card borders
      "#0f172a", // 6 card bg
      "#09090b", // 7 page bg
      "#09090b", // 8
      "#000000", // 9
    ],
    // "cyan" key remapped to navy/blue scale
    cyan: [
      "#eff6ff", // 0
      "#dbeafe", // 1
      "#bfdbfe", // 2
      "#93c5fd", // 3
      "#60a5fa", // 4
      "#3b82f6", // 5  — light end of gradients, text accents
      "#2563eb", // 6  — primary button bg
      "#1d4ed8", // 7  — primary (deep navy)
      "#1e40af", // 8
      "#1e3a8a", // 9  — darkest navy
    ],
  },

  defaultRadius: "md",

  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",

  headings: {
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "clamp(2.4rem, 5vw, 3.6rem)", lineHeight: "1.1" },
      h2: { fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", lineHeight: "1.3" },
      h3: { fontSize: "1.25rem", lineHeight: "1.4" },
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
    Card: {
      defaultProps: { withBorder: false },
      styles: {
        root: {
          background: "rgba(15,23,42,0.85)",
          border: "1px solid rgba(30,41,59,0.8)",
          transition: "border-color 180ms ease, box-shadow 180ms ease",
        },
      },
    },
    Badge: {
      styles: {
        root: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          fontSize: "0.7rem",
        },
      },
    },
    Button: {
      styles: {
        root: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.01em",
          transition: "transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease",
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
