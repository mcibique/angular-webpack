import confirmation from './confirmation.module';

describe('ConfirmationController', function () {
  let confirmationController,
      confirmationService,
      subscription,
      $scope;

  beforeEach(function () {
    confirmationService = {
      onShow: {
        subscribe: () => {}
      }
    };

    subscription = jasmine.createSpyObj('subscription', ['unsubscribe']);
    spyOn(confirmationService.onShow, 'subscribe').and.returnValue(subscription);

    angular.mock.module(confirmation);
    angular.mock.inject(function ($controller, $rootScope) {
      $scope = $rootScope.$new();
      confirmationController = $controller('ConfirmationController', { $scope, confirmationService });
    });
  });

  it('should be defined', function () {
    expect(confirmationController).toBeDefined();
  });

  it('should have "isShown" property intialized to false', function () {
    expect(confirmationController.isShown).toBe(false);
  });

  it('should have confirm function defined', function () {
    expect(confirmationController.confirm).toBeDefined();
  });

  it('should have cancel function defined', function () {
    expect(confirmationController.cancel).toBeDefined();
  });

  it('should subscribe to onShow events', function () {
    expect(confirmationService.onShow.subscribe).toHaveBeenCalledWith(jasmine.any(Function));
  });

  it('should unsubscribe subscription when scope is destroyed', function () {
    $scope.$destroy();
    expect(subscription.unsubscribe).toHaveBeenCalled();
  });

  describe('onShow()', function () {
    let title = 'Random title',
        message = 'Random message',
        resolve = () => {},
        reject = () => {};

    beforeEach(function () {
      confirmationController.onShow({ title, message, resolve, reject });
    });

    it('should set the title', function () {
      expect(confirmationController.title).toBe(title);
    });

    it('should set the message', function () {
      expect(confirmationController.message).toBe(message);
    });

    it('should set the confirm function', function () {
      expect(confirmationController.confirm).toBe(resolve);
    });

    it('should set the cancel function', function () {
      expect(confirmationController.cancel).toBe(reject);
    });

    it('should shown the dialog', function () {
      expect(confirmationController.isShown).toBe(true);
    });
  });

  describe('onConfirmed()', function () {
    beforeEach(function () {
      spyOn(confirmationController, 'confirm');
      confirmationController.onConfirmed();
    });

    it('should hide the dialog', function () {
      expect(confirmationController.isShown).toBe(false);
    });

    it('should call the confirmation callback', function () {
      expect(confirmationController.confirm).toHaveBeenCalled();
    });
  });

  describe('onCancelled()', function () {
    beforeEach(function () {
      spyOn(confirmationController, 'cancel');
      confirmationController.onCancelled();
    });

    it('should hide the dialog', function () {
      expect(confirmationController.isShown).toBe(false);
    });

    it('should call the cancelled callback', function () {
      expect(confirmationController.cancel).toHaveBeenCalled();
    });
  });
});
