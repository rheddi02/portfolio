import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        base: "#0a0a0c",
        surface: "#111115",
        border: "#1e1e24",
        // Text hierarchy
        primary: "#e8e8ea",
        muted: "#6b6b7a",
        dim: "#3a3a45",
        // Single accent — amber/phosphor
        accent: {
          DEFAULT: "#d4a847",
          dim: "#2a2210",
          hover: "#e0b95a",
        },
        // Status colours — used sparingly
        available: "#4ade80",
        error: "#f87171",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", fontWeight: "600" }],
        "h2": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        "h3": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "small": ["0.8125rem", { lineHeight: "1.5" }],
        "label": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      maxWidth: {
        prose: "760px",
        wide: "1100px",
      },
      animation: {
        "cursor-blink": "blink 1.2s step-end infinite",
        "fade-up": "fadeUp 0.4s ease forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
