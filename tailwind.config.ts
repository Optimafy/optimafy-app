import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#3B82F6",
        accent: "#06B6D4",
        bg: "#ffffff",
        surface: "#f4f4f5",
        "surface-light": "#e4e4e7",
        border: "#e4e4e7",
        "border-light": "#d4d4d8",
        // Light mode ("bento editorial", preview 3) — warm paper tones
        paper: "#f6f4ef",
        "paper-line": "#e1ddd2",
        ink: "#191712",
        "ink-soft": "#5c584e",
        // Dark mode ("immersive depth", preview 4) — deep navy/ink tones
        abyss: "#0b0c14",
        "abyss-2": "#111220",
        mist: "#eef0f7",
        "mist-soft": "#9ea3ba",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.15), 0 0 60px rgba(124, 58, 237, 0.05)",
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.15), 0 0 60px rgba(59, 130, 246, 0.05)",
        glass: "inset 0 1px 0 rgba(255,255,255,.06), 0 24px 60px -30px rgba(0,0,0,.6)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
