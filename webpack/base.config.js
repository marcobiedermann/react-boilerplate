/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
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
