import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const sitesWorker = {
  name: 'sites-worker',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'server/index.js',
      source: `export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
}\n`,
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitesWorker],
})
