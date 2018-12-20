const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./build'),
    filename: 'index.js'
  },
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  watch: false
}
