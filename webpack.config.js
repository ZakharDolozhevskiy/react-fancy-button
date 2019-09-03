var path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/button.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "button.js",
    libraryTarget: "commonjs2"
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};