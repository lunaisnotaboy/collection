export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A collection of files not tied to a single project that need to be publicly accessible'
      }
    ],
    title: 'My Personal Collection of Files'
  },
  components: true,
  modules: [],
  css: [
    '@/assets/css/main.css'
  ],
  plugins: [],
  buildModules: [
    '@nuxt/postcss8'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}
