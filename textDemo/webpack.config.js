const path = require('path');
module.exports = {
  mode: 'development', // or 'production'
  entry: './src/func.ts',
  devtool: 'inline-source-map',
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
  output: {
    filename: 'func.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd',

  },
  devServer: {
    static: path.join(__dirname, './'),
    compress: true,
    port: 9000
  }
};