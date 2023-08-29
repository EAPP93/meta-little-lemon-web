const common = require('./webpack.common')
const { merge } = require('webpack-merge')
// plugins para refrescar rapido sin perder lo que se pone en los forms
/* const { HotModuleReplacementPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') */
// Para conocer el Source Map de nuestro proyecto
const { SourceMapDevToolPlugin } = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// port config
const port = process.env.LOCALPORT || 3000

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    port,
    historyApiFallback: true,
    hot: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      // Reglas para archivos CSS para minificarlos y cargarlos en el bundle
      {
        use: ['style-loader', 'css-loader'],
        test: /\.(css)$/i
      }
    ]
  },
  plugins: [
    /* new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(), */
    new SourceMapDevToolPlugin( // para refrescar rapido sin perder lo que se pone en los forms
      {
        filename: '[file].map'
      }
    ),
    new HtmlWebpackPlugin({ // para generar el index.html
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new BundleAnalyzerPlugin({ // para analizar el bundle
      openAnalyzer: true // para que nos muestre el resultado inmediatamente
    })
  ]
}

module.exports = merge(common, devConfig) // mezclamos las configuraciones del webpack.common.js con el webpack.dev.js
