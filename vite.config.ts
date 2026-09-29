import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/web1_marinaLopezVillegas/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
})