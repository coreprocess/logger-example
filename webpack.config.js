var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports =
{
  entry: {
    main: path.resolve(__dirname, 'src/frontend/main'),
  },
  output: {
    path: path.resolve(__dirname, 'build/frontend'),
    publicPath: '/frontend/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
};
