// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:5000',
    }
  },
  css: [
    'vuetify/styles',
    'bootstrap/dist/css/bootstrap.css',
  ],
  nitro: {
    devProxy: {
      '/back': {
        target: 'http://localhost:5000',
        changeOrigin: false
      }
    }
  }
})
