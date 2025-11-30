import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Executive Palette
        background: "#0A0A0A", // Deep black/charcoal
        surface: "#121212", // Slightly lighter for cards
        primary: "#D4AF37", // Metallic Gold
        secondary: "#C0C0C0", // Silver/Platinum
        accent: "#002147", // Oxford Blue
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0A0",
          muted: "#505050",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "premium-sheen": "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
