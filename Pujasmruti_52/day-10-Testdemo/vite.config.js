import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // ✅ VERY IMPORTANT
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
