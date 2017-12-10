const merge = require('webpack-merge');
const baseConfig = require('./webpack/base.config');
const devConfig = require('./webpack/dev.config');
const prodConfig = require('./webpack/prod.config');

const isProduction = process.argv.indexOf('-p') !== -1;

module.exports = merge(baseConfig, isProduction ? prodConfig : devConfig);
