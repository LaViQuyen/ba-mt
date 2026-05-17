import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', 
      // 👇 Thêm images/ vào đây 👇
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'images/logo-192.png', 'images/logo-512.png'],
      manifest: {
        name: 'BeAbleVN IELTS Preparation', 
        short_name: 'IELTS Prep', 
        description: 'Nền tảng luyện thi và chấm điểm IELTS AI',
        theme_color: '#002554', 
        background_color: '#ffffff',
        display: 'standalone', 
        icons: [
          {
            src: 'images/logo-192.png', // 👇 Thêm images/ vào đây 👇
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/logo-512.png', // 👇 Thêm images/ vào đây 👇
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})