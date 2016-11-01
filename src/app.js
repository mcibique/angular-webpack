import ng from 'angular';
import router from 'angular-ui-router';

import './app.scss';

import config from './app.config';
import run from './app.run';
import main from './states/main/main.module';
import books from './states/books/books.module';
import store from './store/store.module';

ng.module('myApp', [router, store, main, books])
  .config(config)
  .run(run);
