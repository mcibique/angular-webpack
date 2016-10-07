import ng from 'angular';
import uiRouter from 'angular-ui-router';

import './main.scss';
import MainController from './main.controller';
import routes from './main.routes';

import profileService from '../../services/profile/profile.module';

export default ng.module('myApp.main', [uiRouter, profileService])
  .config(routes)
  .controller('MainController', MainController)
  .name;
