const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './dist/tooltip.js',
  },
  output: {
    library: 'ui',
    filename: 'tooltip.min.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
};