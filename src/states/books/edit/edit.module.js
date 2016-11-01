import ng from 'angular';
import router from 'angular-ui-router';

import './edit.scss';
import BookEditController from './edit.controller';
import routes from './edit.routes';

export default ng.module('myApp.books.edit', [router])
  .config(routes)
  .controller('BookEditController', BookEditController)
  .name;
