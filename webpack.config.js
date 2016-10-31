let path = require('path');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let BrotliPlugin = require('brotli-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CompressionPlugin = require('compression-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const isDebug = process.argv.indexOf('-p') < 0;

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': isDebug ? '"development"' : '"production"'
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
  new ExtractTextPlugin('styles/[name].css'),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  })
];

if (!isDebug) {
  plugins = plugins.concat([
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      mangle: {
        screw_ie8: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 1024,
      minRatio: 0.9
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 1024,
      minRatio: 0.9
    })
  ]);
}

module.exports = {
  cache: true,
  debug: isDebug,
  entry: {
    app: './src/app.js',
    vendor: ['angular', 'angular-ui-router', 'rxjs/Subject']
  },
  output: {
    path: './dist/',
    publicPath: '/',
    filename: 'js/app.js'
  },
  plugins: plugins,
  devtool: 'source-map',
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
      loader: 'raw!html-minify'
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/normalize-scss/sass'),
      path.resolve(__dirname, './node_modules/support-for/sass'),
      path.resolve(__dirname, './src/sass')
    ]
  },
  postcss: [autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  })],
  'html-minify-loader': {
    empty: true,
    dom: { // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
      lowerCaseAttributeNames: false, // do not call .toLowerCase for each attribute name (Angular2 use camelCase attributes)
    }
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
