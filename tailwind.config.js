/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        fontFamily: {
            "fivo": ["Fivo Sans", "sans-serif"],
        },
    },
    plugins: [],
};
