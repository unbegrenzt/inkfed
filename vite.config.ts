import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      locales: "/src/locales",
      components: "/src/components",
      hooks: "/src/hooks",
      types: "/src/types"
    },
  },
})
