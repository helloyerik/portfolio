import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@mi/tokens": path.resolve(__dirname, "../yedesign-system/packages/tokens/src"),
      "@yedesign": path.resolve(__dirname, "../yedesign-system/packages/components/src/index.ts"),
    },
    dedupe: ["vue"],
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, "..")],
    },
  },
});
