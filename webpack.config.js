const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('css/main.css');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './js/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.woff2?$/,
        loader: 'url-loader',
        options: {
          name: './css/fonts/[hash].[ext]',
          limit: 50000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|svg|eot)$/,
        loader: 'file-loader',
        options: {
          name: './css/fonts/[hash].[ext]',
        },
      },
      {
        test: /\.scss$/i,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    // loader: extractCSS.extract(['css','sass'])
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
    // extractCSS
  ],
}
