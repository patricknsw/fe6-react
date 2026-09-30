import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({command}) => ({
  plugins: [react()],
  base: Command === 'build' ? 'fe6-react' : '/'
}))

