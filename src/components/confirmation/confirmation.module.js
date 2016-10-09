import ng from 'angular';

import ConfirmationComponent from './confirmation.component';
import ConfirmationService from './confirmation.service';
import ConfirmationController from './confirmation.controller';

export default ng.module('myApp.confirmation.component', [])
  .service('confirmationService', ConfirmationService)
  .controller('ConfirmationController', ConfirmationController)
  .component('confirmation', ConfirmationComponent)
  .name;
