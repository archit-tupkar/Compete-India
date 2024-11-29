import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    define: {
        __APP_TITLE__: JSON.stringify(process.env.VITE_APP_TITLE),
    },

    plugins: [react()],
});
