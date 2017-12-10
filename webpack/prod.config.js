/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
/* eslint-enable */

module.exports = {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
  ],
};
