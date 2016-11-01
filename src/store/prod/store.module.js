import ng from 'angular';
import redux from 'ng-redux';

import storeConfig from './store.config';

export default ng.module('myApp.store', [redux])
  .config(storeConfig)
  .name;
