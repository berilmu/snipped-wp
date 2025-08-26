// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/snipped-wp/',   // <-- sesuai nama repo GitHub
  build: {
    outDir: 'dist',       // default, biar jelas
  },
  server: {
    port: 5173,           // bebas, buat lokal dev
    open: true,
  }
})
