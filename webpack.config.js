import path from 'path'
import webpack from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
const CopyWebpackPlugin = require('copy-webpack-plugin')
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

process.noDeprecation = true
const sourcePath = path.join(__dirname, './src')

export default {
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true,
    }),
    new CopyWebpackPlugin(['node_modules/pdfjs-dist/build/pdf.worker.js']),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ],
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  output: {
    path: path.join(process.cwd(), 'static', 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: path.resolve(process.cwd(), './src'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              includePaths: path.resolve(__dirname, './src'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 500000,
            },
          },
        ],
      },
    ],
  },
}
