export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'WDD Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap',
      },
    ],
  },

  components: true,

  router: {
    base: '/wdd-portfolio/',
  },

  generate: {
    exclude: ['utils'],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: ['@nuxtjs/style-resources'],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/styles/global.scss'],

  styleResources: {
    scss: ['./assets/styles/vars/*.scss'],
  },

  build: {
    html: {
      minify: {
        minifyJS: false,
      },
    },
  },
};
