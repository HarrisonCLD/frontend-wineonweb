// vite.config.js
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@services": path.resolve(__dirname, "src/services"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@helpers": path.resolve(__dirname, "src/components/shared/helpers"),
      "@item": path.resolve(__dirname, "src/components/item"),
      "@stock": path.resolve(__dirname, "src/components/stock"),
      "@authentification": path.resolve(__dirname, "src/components/user/authentification"),
      "@rowComponents": path.resolve(__dirname, "src/components/shared/rowComponents"),
      "@messagebox": path.resolve(__dirname, "src/components/shared/messagebox"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@providers": path.resolve(__dirname, "src/providers"),
    },
  },
});
