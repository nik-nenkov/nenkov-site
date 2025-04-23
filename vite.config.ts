import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  base: '/', // Ensure this is set to '/' for root deployment
  build: {
    outDir: 'build/client', // This is the default, but confirm it's not changed
  },
});
