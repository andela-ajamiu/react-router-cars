// var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname + '/src');

// console.log(BUILD_DIR);

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public')
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;