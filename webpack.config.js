module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: __dirname + "/app",
  entry: "./main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name].bundle.js",
    publicPath: '/build'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
    ]
  }
};
