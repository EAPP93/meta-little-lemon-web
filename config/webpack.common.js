const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: '../src/index.jsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    clean: true
  },
  context: path.resolve(__dirname),
  module: {
    rules: [
      // rules for loader of typescript files and javascript files
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      // Reglas para archivos CSS para minificarlos y cargarlos en el bundle
      {
        use: ['style-loader', 'css-loader'],
        test: /\.(css)$/i
      },
      // rules for asset files
      {
        type: 'asset',
        test: /\.(jpg|jpeg|png|gif|svg|webp)$/i
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({ // para generar el index.html
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}
