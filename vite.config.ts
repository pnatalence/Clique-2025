import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Expõe a variável de ambiente API_KEY para o código do frontend.
    // JSON.stringify é usado para garantir que o valor seja passado como uma string.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})