import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#fdf8e7",
          100: "#faf0c0",
          200: "#f5e070",
          300: "#f0cc2a",
          400: "#d4af37",
          500: "#b8960c",
          600: "#9a7d0a",
          700: "#7a6108",
          800: "#5c4806",
          900: "#3d3004",
        },
        navy: {
          50:  "#e8edf5",
          100: "#c5d0e8",
          200: "#8fa5d0",
          300: "#5a7ab8",
          400: "#2e5fa0",
          500: "#1a3a6b",
          600: "#152f58",
          700: "#102445",
          800: "#0b1932",
          900: "#060e1f",
        },
        obsidian: "#0a0a0a",
        "gold-text": "#d4af37",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4af37 0%, #f5e070 40%, #d4af37 60%, #9a7d0a 100%)",
        "dark-gradient": "linear-gradient(135deg, #0a0a0a 0%, #0b1932 50%, #0a0a0a 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
