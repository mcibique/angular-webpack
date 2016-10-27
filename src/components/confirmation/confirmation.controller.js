import angular from 'angular';

/* @ngInject */
export default class ConfirmationController {
  constructor($scope, confirmationService) {
    this.isShown = false;
    this.confirm = this.cancel = angular.noop;

    let subscription = confirmationService.onShow.subscribe(this::this.onShow);

    $scope.$on('$destroy', this::function onDestroyed() {
      subscription.unsubscribe();
    });
  }

  onShow({ title, message, resolve: confirm, reject: cancel }) {
    this.title = title;
    this.message = message;
    this.confirm = confirm;
    this.cancel = cancel;
    this.isShown = true;
  }

  onConfirmed() {
    this.isShown = false;
    this.confirm();
  }

  onCancelled() {
    this.isShown = false;
    this.cancel();
  }
}
