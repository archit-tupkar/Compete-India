/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-bg": "#231934",
                // "main-bg": "#1E1E1E",
                "second-bg": "#dfdfdf",
                "third-bg": "#FF2FBD",
                "fourth-bg": "#1e1e1e",
                "fifth-bg": "#1e1e1e",
                // "fourth-bg": "#231934",
                "text-1": "#fff",
                "text-2": "#000",
                "text-3": "gray",
                "text-error": "red",
            },
        },
    },
    plugins: [],
};
