import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "corporate-slate": "#0F172A", // Slate 900
                "corporate-surface": "#1E293B", // Slate 800
                "corporate-text": "#F8FAFC", // Slate 50
                "corporate-muted": "#94A3B8", // Slate 400
                "corporate-accent": "#38BDF8", // Sky 400
                "corporate-success": "#10B981", // Emerald 500
                "corporate-border": "#334155", // Slate 700
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
