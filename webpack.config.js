const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig({
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.template.html',
      output: 'dist/index.html',
    }),
  ],
});

module.exports = config;
