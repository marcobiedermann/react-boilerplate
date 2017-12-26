/* eslint-disable import/no-extraneous-dependencies */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
/* eslint-enable */

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../docs'),
    hot: true,
  },
  devtool: 'source-map',
  entry: {
    main: [
      path.resolve(__dirname, '../client/index'),
    ],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, '../docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'assets/images/sprite.svg',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'assets/css/[name].css',
    }),
    new SpriteLoaderPlugin(),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
