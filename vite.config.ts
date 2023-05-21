import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://ec2-43-201-252-174.ap-northeast-2.compute.amazonaws.com:3000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
