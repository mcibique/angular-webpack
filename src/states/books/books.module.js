import ng from 'angular';
import router from 'angular-ui-router';

import './books.scss';
import BooksController from './books.controller';
import routes from './books.routes';

import create from './create/create.module';

export default ng.module('myApp.books', [router, create])
  .config(routes)
  .controller('BooksController', BooksController)
  .name;
