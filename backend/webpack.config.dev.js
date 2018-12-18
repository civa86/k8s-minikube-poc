const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./build'),
    filename: 'index.js'
  },
  mode: 'development',
  target: 'node',
  plugins: [new NodemonPlugin()],
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
  watch: true
}
