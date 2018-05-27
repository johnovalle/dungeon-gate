const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['./src/app.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'ts-loader',
    }],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.ts'],
  },
  devtool: 'source-map',
  target: 'web',
  watch: true,
}