const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /(\.css|\.scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(), // para extraer el css
    new HtmlWebpackPlugin({ // para generar el index.html
      template: '../public/index.html'
    })
  ]
}

module.exports = merge(common, prodConfig) // mezclamos las configuraciones del webpack.common.js con el webpack.prod.js
