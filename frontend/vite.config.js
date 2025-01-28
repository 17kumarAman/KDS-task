import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [ react()],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all JS/TS/JSX/TSX files for Tailwind classes
  ],
});
