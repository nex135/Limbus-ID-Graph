import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Limbus-ID-Graph/',
  assetsInclude: ['**/*.yaml', '**/*.yml'], // Tell Vite to handle YAML files as assets
})
