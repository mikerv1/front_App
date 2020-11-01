const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    })],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "./src/index.html"
      })
  ]
};