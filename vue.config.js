module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_variables.scss"`,
      },
      scss: {
        additionalData: `@import "@/assets/scss/variables";`,
      },
    },
  },
}
