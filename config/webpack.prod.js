const common = require('./webpack.common')
const { merge } = require('webpack-merge')

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  }
}

module.exports = merge(common, prodConfig) // mezclamos las configuraciones del webpack.common.js con el webpack.prod.js
