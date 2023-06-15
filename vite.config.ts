import { defineConfig } from "vite";
import reactSWC from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [reactSWC(), tsConfigPaths()],
});
