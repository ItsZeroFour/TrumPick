const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./scripts/main.js",
    lottie: "./scripts/lottie.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.pug",
      filename: "index.html",
      chunks: ["main"], // Указываем, что использовать только main.js
      inject: "body",
      scriptAttributes: {
        defer: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index-ru.pug",
      filename: "index-ru.html",
      chunks: ["main"], // Может быть, нужно изменить в соответствии с вашими требованиями
      inject: "body",
      scriptAttributes: {
        defer: false,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets/icons",
          to: "assets/icons",
        },

        {
          from: "assets/images",
          to: "assets/images",
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.json$/i,
        type: "javascript/auto",
        use: "json-loader",
      },
      {
        test: /\.json$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/lottie/[name][ext]",
        },
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-loader",
            options: {
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/inex-ru\.html/, to: '/index-ru.html' },
      ],
    },
  },
};
