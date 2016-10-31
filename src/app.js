import ng from 'angular';
import redux from 'ng-redux';
import router from 'angular-ui-router';

import './app.scss';

import config from './app.config';
import run from './app.run';
import main from './states/main/main.module';
import books from './states/books/books.module';

ng.module('myApp', [router, redux, main, books])
  .config(config)
  .run(run);
