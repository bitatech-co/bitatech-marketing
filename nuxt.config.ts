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
    "@nuxtjs/prismic",
    "nuxt-calendly"
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
  prismic: {
    endpoint: "https://bitatech-marketing.cdn.prismic.io/api/v2"
  },
  // entirely optional
  calendly: {
    /**
     * Setting to `false` disables the module.
     * @default true
     * @description Use this setting to disable the module.
     */
    isEnabled: true,
    /**
     * Loads the required CSS for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/widget.css by yourself, or you want to load a custom CSS.
     */
    loadWidgetCSS: true,
    /**
     * Loads a required SVG Asset for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/close-icon.svg by yourself, or you want to load a custom SVG.
     */
    loadWidgetCloseIconSvg: true
  },
});