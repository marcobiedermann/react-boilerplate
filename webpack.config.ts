import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';

export const paths = {
  dist: resolve(__dirname, 'dist'),
  public: resolve(__dirname, 'public'),
  src: resolve(__dirname, 'src'),
};

const config: Configuration = {
  entry: {
    main: [`${paths.src}/assets/js/index`],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    path: paths.dist,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default config;
