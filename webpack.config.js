const path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_PROD = (process.env.NODE_ENV == 'production' ? true : false);

console.log("hey hey look here -->"+IS_PROD)

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve('dist'),
    filename: IS_PROD ? 'js/[name].bundle.min.js' : 'js/[name].bundle.js'

  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    })

  ]
}
