import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      // exclude the file with a space in its name that causes EAGAIN on copy
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp4'],
});
