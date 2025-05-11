import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"),
        viewer: resolve(__dirname, "viewer.html"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
