import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 💡 반드시 __dirname을 사용하여 절대 경로를 만들어야 합니다.
      '@': path.resolve(__dirname, './src'),
    },
  },
})
