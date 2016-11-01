import ng from 'angular';
import redux from 'ng-redux';

import storeConfig from './store.config';
import { runDevTools } from './store.dev-tools';

export default ng.module('myApp.store', [redux])
  .config(storeConfig)
  .run(runDevTools)
  .name;
