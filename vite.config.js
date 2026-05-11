import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        articleBoardroom: resolve(__dirname, 'article-boardroom-readiness.html'),
        articleLitigation: resolve(__dirname, 'article-litigation-timeline.html'),
        articleLeasing: resolve(__dirname, 'article-commercial-leasing-2026.html'),
        articleTrademark: resolve(__dirname, 'article-trademark-hygiene.html'),
        articleInvestigations: resolve(__dirname, 'article-internal-investigations.html'),
        articleSettlement: resolve(__dirname, 'article-settlement-strategy.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
