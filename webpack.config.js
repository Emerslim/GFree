// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV;
const config_vars = require('./config.json')[env || 'development'];

const config = {
  entry: [
    "@babel/polyfill", 
    path.join(__dirname, 'src', 'app', 'index.js')
  ],
  mode: env,
  output: {
    publicPath: '/',
  },
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.common.js'),
      'src': path.resolve(__dirname, 'src'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },      
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'app', 'index.html'),
      template: path.join(__dirname, 'src', 'app', 'index.html'),
      inject: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/routes.js'),
        to: path.resolve(__dirname, 'dist')
      },
      {
        from: path.resolve(__dirname, 'src/server.js'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new webpack.DefinePlugin({
      '__FOOD_SERVICE_ENDPOINT__': JSON.stringify(config_vars.FOOD_SERVICE_ENDPOINT || ''),
      '__FOOD_SERVICE_TOKEN__': JSON.stringify(config_vars.FOOD_SERVICE_TOKEN || ''),
    })
  ],
};

module.exports = config;