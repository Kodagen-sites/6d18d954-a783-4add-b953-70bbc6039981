import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Graphite & Rose locked palette
        bg: "#FAF4F2",        // warm cream base
        surface: "#F2D0CC",   // soft rose pink surface
        accent: "#857173",    // muted graphite mid-tone
        primary: "#322425",   // deep graphite — text/contrast
        ink: "#322425",
        rose: "#F2D0CC",
        graphite: "#322425",
        "graphite-mid": "#857173",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-figtree)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
