module.exports = {
  devtool: "source-map",
  watch: true,
  entry: {
    filename: "./worker_fibonacci.js",
  },
  output: {
    filename: "bundle.js",
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(?:js|mjs|cjs)$/,
  //       exclude: /node_modules/
  //     },
  //   ],
  // },
};
