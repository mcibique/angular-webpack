import ng from 'angular';

import ProfileService from './profile.service';

export default ng.module('profile.service', [])
  .service('profileService', ProfileService)
  .name;
