import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Встановлення базового шляху для коректного завантаження ресурсів
  // у підкаталозі GitHub Pages (/Emdula-work-test/)
  base: '/Emdula-work-test/', 
  plugins: [react()],
})