import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pages username.github.io uses root path
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
