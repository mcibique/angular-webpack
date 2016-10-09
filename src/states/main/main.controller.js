/* @ngInject */
export default class MainController {
  constructor(profileService, confirmationService) {
    this.profileService = profileService;
    this.confirmationService = confirmationService;

    this.title = 'Angular Webpack Test';

    this.profileService.getProfile().then(profile => {
      this.profile = profile;
    });
  }

  openConfirmation() {
    this.confirmationResult = '';
    this.confirmationService
      .show('Custom confirmation title', 'Are you sure?')
      .then(this::function onConfirmed() {
        this.confirmationResult = 'The confirmation dialog has been confirmed';
      })
      .catch(this::function onCancelled() {
        this.confirmationResult = 'The confirmation dialog has been cancelled';
      });
  }
}
