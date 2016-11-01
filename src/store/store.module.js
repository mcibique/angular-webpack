if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod/store.module');
} else {
  module.exports = require('./dev/store.module');
}
