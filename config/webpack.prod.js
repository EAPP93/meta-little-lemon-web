const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: true,
              url: true,
              modules: true
            }
          }
        ],
        include: /\.module\.css/
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    },
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
