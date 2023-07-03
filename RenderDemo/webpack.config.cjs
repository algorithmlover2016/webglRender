const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/renderVideo.ts',
  devtool: 'source-map',
  output: {
    filename: 'renderVideo.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};