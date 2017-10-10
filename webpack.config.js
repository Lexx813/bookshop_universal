var path = require('path');
const webpack = require('webpack');
module.exports  = {
  entry: './src/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  resolve: {
        alias: {
            "react": __dirname + "/node_modules/react"
        }
    },

  module:{
    loaders: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
}