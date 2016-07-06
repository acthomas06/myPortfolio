
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
      'bundle': './app/main.ts',
      'vendor': './app/vendor.ts',
      'polyfills': './app/polyfills.ts'
  },  
  resolve: {
    extensions: ['', '.js', '.ts', '.less', '.png', '.jpg', '.svg', '.woff', '.ttf']
  },
  module: {
    loaders: [
      {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
      {test: /\.less/, loaders: ['raw-loader', 'less-loader']},
      {test: /\.(png|jpe?g|gif|svg|)$/, loader: 'file?name=img/[name].[ext]'},
      {test: /\.(woff|woff2|ttf|eot|ico)$/, loader: 'file?name=fonts/[name].[ext]'}
    ]
  },
  externals: [
    'zone.js/zone',
    'reflect-metadata/reflect'
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['bundle', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
};