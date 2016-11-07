import ng from 'angular';
import router from 'angular-ui-router';

import './app.scss';

import config from './app.config';
import constants from './app.constants';
import run from './app.run';
import main from './states/main/main.module';
import books from './states/books/books.module';
import store from './store/store.module';

ng.module('myApp', [router, store, main, books])
  .constant('config', constants)
  .config(config)
  .run(run);
