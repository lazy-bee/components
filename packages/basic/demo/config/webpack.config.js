const path = require('path');

const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.extensions.push(
    '.js',
    '.vue',
    '.less',
    '.styl',
    '.scss'
  );
  defaultConfig.resolve.alias.styles = path.resolve(
    __dirname,
    '../../src/styles'
  );
  defaultConfig.resolve.alias.mixins = path.resolve(
    __dirname,
    '../../src/mixins'
  );

  defaultConfig.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      test: /\.styl$/,
      loaders: ['style-loader', 'css-loader', 'stylus-loader']
    }
  );
  return defaultConfig;
};
