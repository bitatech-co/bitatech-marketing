// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Bitatech Technology Services Company Limited",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content:
            "We partner with founders, startups, and enterprises to design and create MVP, products, and services following industry best practices.",
        },
      ],
    },
  },
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxtjs/prismic"
  ],
  build: {
    transpile: [
    ],
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {},
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["tel"].includes(tag),
    },
  },
  prismic: { endpoint: "bitatech-marketing" }
});