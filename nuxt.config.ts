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
          hid: 'og-desc',
          name: "description",
          content:
            "We partner with founders, startups, and enterprises to design and create MVP, products, and services following industry best practices.",
        },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Technology Services Company' },
        { hid: 'og-image', property: 'og:image', content: '/logo-bitatech-full-white.jpg' },
        { hid: 'og-url', property: 'og:url', content: 'https://bitatech.co' },
      ],
    },
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@nuxtjs/prismic',
    'nuxt-calendly',
    'nuxt-gtag',
    '@nuxt/devtools',
    '@productdevbook/chatwoot'
  ],
  build: {
    transpile: ["@prismicio/vue"]
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
  gtag: {
    id: 'G-FB44MT9H97',
    config: {
      page_title: 'Bitatech Technology Services Company Limited'
    }
  },
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  chatwoot: {
    init: {
      websiteToken: 'MZdk2UFC5H27mVHNvPhxGvv9'
    },
    settings: {
      locale: 'en',
      position: 'right',
      launcherTitle: 'Chat with us',
      // ... and more settings
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  }
});