const path = require("path");

module.exports = {
  entry: "./lib/main.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { exclude: /node_modules/ },
    ],
  },
  devtool: "source-map",
};
