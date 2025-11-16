import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const isVercel = process.env.VERCEL
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    // Em desenvolvimento, use '/'. Em produção, use '/' na Vercel e
    // '/Portfolio-Gabi/' (GitHub Pages) em outros ambientes.
    base: isProd ? (isVercel ? '/' : '/Portfolio-Gabi/') : '/',
  }
})