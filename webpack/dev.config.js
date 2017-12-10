/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
/* eslint-enable */

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
