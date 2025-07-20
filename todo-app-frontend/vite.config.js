import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Kiểm tra nếu đang build production
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/todoist-clone/' : '/', // 👈 Tên repo của bạn trên GitHub
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 👉 Local backend khi dev
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist', // Mặc định
    emptyOutDir: true
  },
  define: {
    'process.env': process.env
  }
});