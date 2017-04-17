const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'lodash',
  'react',
  'redux',
  'react-dom',
  'react-redux',
]

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        // use: ['style-loader','css-loader'],
        loader: extractTextPlugin.extract({
          loader: [{
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }],
        }),
        test: /\.s?[ac]ss$/,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest']
    }),
    new htmlWebpackPlugin({
      template: './index.html'
    }),
    new extractTextPlugin({
      filename:'[name].[chunkhash].css'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
}

module.exports = config;