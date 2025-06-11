import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SitePessoal/', // 👈 isso aqui é essencial
  plugins: [react()],
})
