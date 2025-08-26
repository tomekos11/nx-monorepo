// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
    shim: true,
    tsConfig: {
      compilerOptions: {
        baseUrl: ".",
        paths: {
          "shared-types": ["../shared-types/dist/index.d.ts"]
        },
        types: ["@nuxt/schema", "node"]
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001'
    }
  },
  css: ['~/assets/css/main.css']
})
