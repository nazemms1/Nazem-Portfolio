import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "cyan",
  colors: {
    dark: [
      "#C9D1D9",
      "#B1BAC4",
      "#8B949E",
      "#6E7681",
      "#484F58",
      "#30363D",
      "#21262D",
      "#161B22",
      "#0D1117",
      "#010409",
    ],
  },
  defaultRadius: "lg",
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  headings: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    fontWeight: "800",
  },
  shadows: {
    xs: "0 1px 4px rgba(0,0,0,0.4)",
    sm: "0 2px 10px rgba(6,182,212,0.1), 0 4px 20px rgba(0,0,0,0.3)",
    md: "0 4px 20px rgba(6,182,212,0.15), 0 8px 40px rgba(0,0,0,0.35)",
    lg: "0 8px 40px rgba(6,182,212,0.2), 0 16px 60px rgba(0,0,0,0.4)",
    xl: "0 16px 60px rgba(6,182,212,0.25), 0 32px 80px rgba(0,0,0,0.45)",
  },
  components: {
    Card: {
      defaultProps: {
        withBorder: false,
      },
    },
    Badge: {
      styles: {
        root: {
          fontWeight: 700,
          letterSpacing: "0.02em",
        },
      },
    },
    Button: {
      styles: {
        root: {
          fontWeight: 700,
          letterSpacing: "0.01em",
        },
      },
    },
  },
});
