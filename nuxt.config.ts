// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'vuetify/styles',
    'bootstrap/dist/css/bootstrap.css',
  ],
  serverHandlers: [
    {
      route: '/back',
      handler: '~/server/middleware/proxy.js',
    },
  ]
})
