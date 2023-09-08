const common = require('./webpack.common')
const { merge } = require('webpack-merge')
// plugins para refrescar rapido sin perder lo que se pone en los forms
/* const { HotModuleReplacementPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') */
// Para conocer el Source Map de nuestro proyecto
const { SourceMapDevToolPlugin } = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// port config
const port = process.env.LOCALPORT || 3000

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    port,
    historyApiFallback: true,
    hot: true,
    compress: true,
    open: {
      target: [`http://localhost:${port}`, 'http://localhost:8888'],
      app: {
        name: 'chrome',
        arguments: ['--incognito']
      }
    }
  },
  devtool: 'source-map',
  plugins: [
    new SourceMapDevToolPlugin( // para refrescar rapido sin perder lo que se pone en los forms
      {
        filename: '[file].map'
      }
    ),
    new BundleAnalyzerPlugin({ // para analizar el bundle
      openAnalyzer: false // para que nos muestre el resultado inmediatamente || true para abrir automaticamente en el navegador por defecto
    })
  ]
}

module.exports = merge(common, devConfig) // mezclamos las configuraciones del webpack.common.js con el webpack.dev.js
