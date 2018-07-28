/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '.env.development'),
});

module.exports = {
  devServer: {
    contentBase: 'client',
  },
  entry: {
    main: [
      path.resolve(__dirname, 'client/assets/js/index'),
    ],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'development',
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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
