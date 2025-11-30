/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Premium Executive Palette (Matching Web)
                background: "#0A0A0A",
                surface: "#121212",
                primary: "#D4AF37",
                secondary: "#C0C0C0",
                accent: "#002147",
                text: {
                    primary: "#FFFFFF",
                    secondary: "#A0A0A0",
                    muted: "#505050",
                },
            },
        },
    },
    plugins: [],
}
