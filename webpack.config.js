module.exports = {
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
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.css$/, loader: 'style!css'},
    ]
  }
}
