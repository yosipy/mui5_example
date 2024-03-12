import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@/", replacement: `${__dirname}/src/` }],
  },
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? "/mui5_example" : "/",
})
