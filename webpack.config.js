const path = require('path');

module.exports = {
  entry: './src/utminsight.ts',
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
    filename: 'utminsight.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'UTMInsight',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};