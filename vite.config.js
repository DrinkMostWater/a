import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const targetUrl = 'http://192.168.31.157'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api29999/': {
        target: targetUrl + ':29999/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api29999/, 'api')
      },
      '/api30000/': {
        target: targetUrl + ':30000/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30000/, 'api')
      },
      '/api30001/': {
        target: targetUrl + ':30001/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30001/, 'api')
      },
      '/api30003/': {
        target: targetUrl + ':30003/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30003/, 'api')
      },
      '/api30004/': {
        target: targetUrl + ':30004/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30004/, 'api')
      },
      '/api30005/': {
        target: targetUrl + ':30005/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30005/, 'api')
      },
      '/api30006/': {
        target: targetUrl + ':30006/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30006/, 'api')
      },
      '/api30007/': {
        target: targetUrl + ':30007/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30007/, 'api')
      },
      '/api30008/': {
        target: targetUrl + ':30008/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30008/, 'api')
      },
      '/api30009/': {
        target: targetUrl + ':30009/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30009/, 'api')
      },
      '/api30010/': {
        target: targetUrl + ':30010/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api30010/, 'api')
      },
      '/api60000/': {
        target: targetUrl + ':60000/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api60000/, 'api')
      }
    }
  }
})
