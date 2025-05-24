import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    // visualizer({ open: true })
  ],
  base: '/',
  build: {
    outDir: 'build/client',
    target: 'esnext', // or 'es2024' if you want to be explicit
  },
});
