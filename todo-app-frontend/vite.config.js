import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Tự động xác định môi trường
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/todoist-clone/' : '/', // 👈 tên repo trên GitHub khi deploy
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 👉 dùng khi chạy local
        changeOrigin: true
      }
    }
  },
  define: {
    // 👇 Cho phép bạn dùng biến môi trường nếu cần
    'process.env': process.env
  }
});