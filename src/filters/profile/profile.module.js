import ng from 'angular';

import profileFilter from './profile.filter';

export default ng.module('myApp.profile.filter', [])
  .filter('profile', profileFilter)
  .name;
