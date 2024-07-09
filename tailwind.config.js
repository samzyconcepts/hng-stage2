/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                green: {
                    light: "#CCE7D0",
                    primary: "#016134",
                },
                orange: {
                    base: "#F59E3E",
                },
            },
        },
    },
    plugins: [],
};
