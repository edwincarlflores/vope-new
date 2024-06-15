import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(
        import.meta.dirname,
        "./src/shared/components",
      ),
      "@/lib": path.resolve(import.meta.dirname, "./src/shared/lib"),
      "@/server": path.resolve(import.meta.dirname, "../server/src"),
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
