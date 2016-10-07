let path = require('path');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDebug = process.argv.indexOf('-p') < 0;

module.exports = {
  cache: true,
  entry: {
    app: './src/app.js',
    vendor: ['angular', 'angular-ui-router']
  },
  output: {
    path: './dist/',
    publicPath: '/',
    filename: 'js/app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('styles/[name].css'),
  ],
  devtool: isDebug ? 'source-map' : null,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['ng-annotate', 'babel']
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/normalize-scss/sass'),
      path.resolve(__dirname, './node_modules/support-for/sass')
    ]
  },
  postcss: [autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  })]
};
