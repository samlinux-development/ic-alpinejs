import { defineConfig } from 'vite'
import environment from "vite-plugin-environment";
import viteCompression from 'vite-plugin-compression';
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    viteCompression(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
  ],
});