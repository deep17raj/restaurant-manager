import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(),tailwindcss(),],
  server: {
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
      },
    },
  },
})

// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig(({ mode }) => {
//   // Load .env files for the current mode (development or production)
//   const env = loadEnv(mode, process.cwd(), '')

//   return {
//     plugins: [react(), tailwindcss()],
//     server: {
//       proxy: {
//         '/api': {
//           target: env.VITE_API_URL, // use env here
//           changeOrigin: true,
//         },
//       },
//     },
//   }
// })
