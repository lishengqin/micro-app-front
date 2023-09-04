import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: /^~?@\//, replacement: path.join(process.cwd(), 'src/') }],
  },
  base: "/child-vue3/",
  server: {
    host: true,
    port: 2222,

  }
})
