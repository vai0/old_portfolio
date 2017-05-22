var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.join(__dirname, 'build'), // This is where images AND js will go
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
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
            name: './css/fonts/[name].[ext]',
            limit: 50000,
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
            limit: '8192'
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./js'),
      path.resolve('./'),
      'node_modules'
    ]
  },
};
