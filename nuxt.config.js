const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Гостиница Уржум',
    titleTemplate: '%s | Гостиница Уржум',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/fonts.sass',
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ksvuescrollmagic.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/mask.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-yandex-maps/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: '10' } : { ie: '11' }
        return [
          [ require.resolve('@nuxt/babel-preset-app'), { targets } ]
        ]
      }
    },
    /*
    ** You can extend webpack config here
    */
   vendor: ['swiper', 'ksvuescrollmagic', 'axios'],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
