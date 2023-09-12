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
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }]
          ]
        }
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]' // Esto configura el nombre de las clases generadas por CSS Modules
              }
            }
          }
        ]
      },
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}
