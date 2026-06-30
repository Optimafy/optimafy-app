import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.15), 0 0 60px rgba(124, 58, 237, 0.05)",
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.15), 0 0 60px rgba(59, 130, 246, 0.05)",
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
