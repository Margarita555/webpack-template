const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./js/main.js",
  output: {
    filename: `./js/${filename("js")}`,
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      //   {
      //     test: /\.scss$/i,
      //     use: [
      //       "style-loader",
      //       {
      //         loader: MiniCssExtractPlugin.loader,
      //         options: {
      //           esModule: false,
      //         },
      //       },
      //       "css-loader",
      //       "sass-loader",
      //     ],
      //   },
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //       },
      //     },
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    //     new MiniCssExtractPlugin(),
  ],
  //   devServer: {
  //     port: 9999,
  //     open: true,
  //     stats: "errors-only",
  //   },
};
