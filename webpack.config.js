const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

dotenv.config();

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, 'client/assets/js/index'),
    ],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'server/public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
