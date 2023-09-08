const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new MiniCssExtractPlugin() // para extraer el css
  ]
}

module.exports = merge(common, prodConfig) // mezclamos las configuraciones del webpack.common.js con el webpack.prod.js
