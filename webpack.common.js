const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|assets)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: '/assets/projects',
        use: [{ loader: 'file-loader', options: { outputPath: 'fonts/' } }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        exclude: '/assets/projects',
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'images/' }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Single Landing Page WebApp',
      template: 'src/index.html'
    }),
    new CopyPlugin([
      { from: './assets/favicon', to: 'favicon/' },
      { from: './assets/projects/nasa', to: 'nasa/' },
      { from: './assets/projects/soccer-club', to: 'soccer-club/' }
    ])
  ]
}
