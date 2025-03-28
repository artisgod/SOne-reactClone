import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/SOne-reactClone/",
  build: {
    outDir: "build", // Change from "dist" to "build"
  }
})
