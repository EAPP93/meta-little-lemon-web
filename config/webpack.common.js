const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '../src/index.jsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash].js',
    publicPath: '/',
    clean: true
  },
  context: path.resolve(__dirname),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }]
          ]
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|eot|ttf|woff|woff2)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}
