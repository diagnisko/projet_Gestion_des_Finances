import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages sert généralement le site sous un sous-chemin.
  // En forçant des chemins relatifs, les assets (JS/CSS) restent résolus.
  base: './',
  plugins: [react()],
})
