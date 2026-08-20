import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  base: "/Dharti-Agro-Demo/",

  server: {
    hmr: process.env.DISABLE_HMR !== "true",
    watch: process.env.DISABLE_HMR === "true" ? null : {}
  }
});
