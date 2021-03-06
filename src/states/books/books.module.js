import ng from 'angular';
import router from 'angular-ui-router';

import './books.scss';
import './form/form.scss';
import BooksController from './books.controller';
import routes from './books.routes';

import create from './create/create.module';
import edit from './edit/edit.module';

export default ng.module('myApp.books', [router, create, edit])
  .config(routes)
  .controller('BooksController', BooksController)
  .name;
