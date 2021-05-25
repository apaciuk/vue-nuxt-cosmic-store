export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-nuxt-cosmic-store',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
 
   ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   '~plugins/buefy',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
   /*
  ** Environment variables
  */
  env: {
    COSMIC_BUCKET: process.env.COSMIC_BUCKET || 'vue-nuxt-cosmic-store',
    COSMIC_READ_KEY: process.env.COSMIC_READ_KEY,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
  }
}
