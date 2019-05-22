module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
    },
    output: {
      libraryExport: "default"
    }
  }
};
