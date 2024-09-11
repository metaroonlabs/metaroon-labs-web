import path from "path"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [react(), rewriteAll()],
  server: {
    host: true,
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})