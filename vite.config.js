import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000, // Dev server will run on localhost:3000
    strictPort: true, // If port 3000 is busy, it will throw instead of using another
  },
  preview: {
    port: 8080, // `vite preview` will serve on localhost:8080
  },
  plugins: [react()],
});
