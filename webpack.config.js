// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  // target: "node",
  node: { fs: "empty" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
