import ng from 'angular';
import router from 'angular-ui-router';

import './main.scss';
import MainController from './main.controller';
import routes from './main.routes';

import confirmation from '../../components/confirmation/confirmation.module';

import profileService from '../../services/profile/profile.module';

export default ng.module('myApp.main', [router, profileService, confirmation])
  .config(routes)
  .controller('MainController', MainController)
  .name;
