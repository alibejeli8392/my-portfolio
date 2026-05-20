import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isAnalyzeMode = mode === 'analyze'

  return {
    plugins: [
      react(),
      tailwindcss(),
      isAnalyzeMode &&
        visualizer({
          filename: 'dist/bundle-stats.html',
          template: 'treemap',
          gzipSize: true,
          brotliSize: true,
          open: false,
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('node_modules/framer-motion')) {
              return 'motion-vendor'
            }
            if (id.includes('node_modules/react-icons')) {
              return 'icons-vendor'
            }
            if (id.includes('node_modules/@calcom/embed-react')) {
              return 'cal-vendor'
            }
          },
        },
      },
    },
  }
})
