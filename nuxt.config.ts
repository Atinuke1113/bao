export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/motion/nuxt',
    // other modules if any
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vue-countup-v3']
  },
  compatibilityDate: "2025-03-24",
})