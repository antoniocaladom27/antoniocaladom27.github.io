import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// O site fica na raiz de antoniocaladom27.github.io, por isso base '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
