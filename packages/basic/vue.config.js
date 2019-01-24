const path = require('path');

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.styl', '.scss', '.less', '.css', '.vue', '.json'],
      alias: {
        styles: path.resolve(__dirname, './src/styles'),
        mixins: path.resolve(__dirname, './src/mixins')
      }
    }
  },
  chainWebpack: (config) => {
    const inlineLimit = 100000;
    config.devtool('');
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: inlineLimit,
        name: `fonts/[name].[ext]`
      });
  }
};
