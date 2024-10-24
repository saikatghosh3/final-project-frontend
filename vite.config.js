import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
      'config': path.resolve(__dirname, 'src/config'),
      'views': path.resolve(__dirname, 'src/views'),
      'data': path.resolve(__dirname, 'src/data'),
      'components': path.resolve(__dirname, 'src/components'),
      'services': path.resolve(__dirname, 'src/services'),
      'store': path.resolve(__dirname, 'src/store'),

    }
  },
  plugins: [react()],
})
