// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  devServer: {
    port: 10000,
  },

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL,
    },
  },
})
