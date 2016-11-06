/* @ngInject */
export default class MainController {
  constructor($ngRedux, $scope, profileService, confirmationService) {
    this.confirmationService = confirmationService;
    this.profileService = profileService;

    this.title = 'Angular Webpack Test';

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, dispatch => { this.dispatch = dispatch; })(this);
    $scope.$on('$destroy', unsubscribe);
  }

  $onInit() {
    this.dispatch(this.profileService.getProfile());
  }

  mapStateToThis(state) {
    return {
      profile: state.profile
    };
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
