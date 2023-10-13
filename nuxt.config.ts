// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'bootstrap-grid/dist/grid.css',],
  modules: ['@nuxtjs/google-fonts','nuxt-icon','nuxt-swiper',],
  swiper: {
    modules: ['navigation', 'pagination']
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  
plugins:[ ]
})
