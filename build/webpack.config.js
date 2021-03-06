// TODO use webpack merge
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const cwd = process.cwd();

// For dynamic public paths: https://webpack.js.org/guides/public-path/
const mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development';

module.exports = {
  target: 'node',
  mode,
  cache: false,
  devtool: 'source-map',
  entry: {
    server: [
      path.join(cwd, 'src/main.js'),
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.min.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: 'babel-loader',
        include: [path.join(cwd, 'src')],
        exclude: /node_modules/,
      },
    ],
    noParse: /\.min\.js/,
  },
  externals: [
    nodeExternals()
  ],
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    concatenateModules: true,
  },
  output: {
    chunkFilename: 'treehouse.[id].js',
    filename:      'treehouse.js',
    library:       'treehouse',
    libraryTarget: 'commonjs2',
    path:           path.join(cwd, 'dist')
  },
};
