module.exports = {
  /*
  ** Headers of the page
  */
  css: [
    { src: '~/node_modules/bootstrap/dist/css/bootstrap.css' },
    { src: '~/node_modules/font-awesome/css/font-awesome.css' },
    { src: '~/assets/styles.css' }
  ],
  head: {
    title: 'saliim-platform-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Saliim platform website v.1.0 - Single project, closed system development' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Libre+Franklin:200,300,400,600,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
