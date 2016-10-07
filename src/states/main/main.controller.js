/* @ngInject */
export default class MainController {
  constructor(profileService) {
    this.title = 'Angular Webpack Test';

    profileService.getProfile().then(profile => {
      this.profile = profile;
    });
  }
}
