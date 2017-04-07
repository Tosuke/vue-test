const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
        }
      },
      {
        test: /\.html?$/,
        loader: "vue-template-loader",
        include: /src/
      },
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  }
}