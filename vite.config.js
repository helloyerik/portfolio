import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [vue(), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@yerik/yedesign-system/tokens.css": path.resolve(
        __dirname,
        "./node_modules/@yerik/yedesign-system/dist/tokens.css",
      ),
      "@yerik/yedesign-system/style.css": path.resolve(
        __dirname,
        "./node_modules/@yerik/yedesign-system/dist/style.css",
      ),
    },
    dedupe: ["vue"],
  },
});