const path = require('path');

module.exports = {
  entry: './src/tooltip.ts',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'ui',
    filename: 'tooltip.js',
    path: path.resolve(__dirname, 'dist'),
  },
};