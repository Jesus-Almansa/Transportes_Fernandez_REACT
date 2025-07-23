import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // puedes subir a 300 si ves que se calienta mucho el CPU
    },
    host: true,
  },
});