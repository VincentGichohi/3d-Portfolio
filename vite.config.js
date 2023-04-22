import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/VincentGichohi/3d-Portfolio.git",
  build: {
    chunkSizeWarningLimit: 2000, // set the chunk size limit to 1000
  }
});
