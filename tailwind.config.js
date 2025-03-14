/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
    daisyui: {
        themes: ["bumblebee", "coffee"],
        darkTheme: "coffee",
    },
    theme: {
        colors: {
            primary: "#4CAF50",
            secondary: "#087F23",
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
            },
            typography: {
                quoteless: {
                    css: {
                        "blockquote p:first-of-type::before": { content: "none" },
                        "blockquote p:first-of-type::after": { content: "none" },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
