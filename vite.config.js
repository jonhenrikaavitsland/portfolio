import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.js', '.jsx', '.cjs', '.mjs', '.ts', '.tsx'],
  },
  build: {
    logLevel: 'info',
  },
});
