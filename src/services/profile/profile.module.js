import ng from 'angular';

import ProfileService from './profile.service';

export default ng.module('myApp.profile.service', [])
  .service('profileService', ProfileService)
  .name;
