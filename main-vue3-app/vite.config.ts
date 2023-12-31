import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: /^~?@\//, replacement: path.join(process.cwd(), 'src/') }],
  },
  server: {
    host: true,
    port: 1111,
    proxy: {
      "^/child-vue3": {
        target: 'http://localhost:2222/',
        changeOrigin: true,
      }
    }
  }
})
