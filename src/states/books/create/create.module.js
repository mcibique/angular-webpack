import ng from 'angular';
import router from 'angular-ui-router';

import './create.scss';
import BookCreateController from './create.controller';
import routes from './create.routes';

export default ng.module('myApp.books.create', [router])
  .config(routes)
  .controller('BookCreateController', BookCreateController)
  .name;
