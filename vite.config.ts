import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    cssInjectedByJsPlugin({
      topExecutionPriority: true,
      styleId: "vanilla-extract-css",
    }),
  ],
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/Popup/index.tsx"),
        viewer: resolve(__dirname, "src/Viewer/index.tsx"),
        background: resolve(__dirname, "src/background.ts"),
        content: resolve(__dirname, "src/content.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
