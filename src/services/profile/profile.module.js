import ng from 'angular';
import redux from 'ng-redux';

import ProfileService from './profile.service';

export default ng.module('myApp.profile.service', [redux])
  .service('profileService', ProfileService)
  .name;
