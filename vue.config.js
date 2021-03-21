module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/chairland/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/styles/_general.sass"`
        }
      }
    }
  };