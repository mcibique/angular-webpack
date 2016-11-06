module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    port: 9876,
    files: [
      './src/tests.js'
    ],
    autoWatch: false,
    reporters: ['spec'],
    browsers: ['PhantomJS2'],
    singleRun: true,
    preprocessors: {
      './src/tests.js': ['webpack']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['ng-annotate', 'babel']
        }, {
          test: /\.scss$/,
          loader: 'null'
        }, {
          test: /\.html$/,
          loader: 'html'
        }]
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
}
