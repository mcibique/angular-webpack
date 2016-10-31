import ng from 'angular';
import router from 'angular-ui-router';

import './books.scss';
import BooksController from './books.controller';
import routes from './books.routes';

export default ng.module('myApp.books', [router])
  .config(routes)
  .controller('BooksController', BooksController)
  .name;
