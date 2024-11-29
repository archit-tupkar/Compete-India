/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-bg": "#1E1E1E",
                "second-bg": "#dfdfdf",
                "third-bg": "#FF2FBD",
                "text-1": "#fff",
                "text-2": "#000",
                "text-3": "",
            },
        },
    },
    plugins: [],
};
