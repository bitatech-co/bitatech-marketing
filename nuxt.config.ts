// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/prismic',
  ],
  prismic: {
    endpoint: 'https://<REPOSITORY>.cdn.prismic.io/api/v2',
    modern: true
    /* see configuration for more */
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})

