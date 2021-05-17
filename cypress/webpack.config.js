const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  plugins: [new TerserPlugin()],
  resolve: {
    extensions: [".ts", ".js"],
  },
  resolve: { fallback: { path: require.resolve("path-browserify") } },
  // node: { fs: "empty", child_process: "empty", readline: "empty" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/loader",
          },
        ],
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/lib/featuresLoader",
          },
        ],
      },
    ],
  },
};
