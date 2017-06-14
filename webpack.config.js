var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom', 'smoothscroll-polyfill'
]

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
        }]
      },
      {
        test: /\.(woff2|woff)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './fonts/[name].[ext]',
            limit: 30000,
            mimetype: 'application/font-woff',
          },
        }
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './images/[name].[ext]',
            limit: 30000
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src/js'),
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
