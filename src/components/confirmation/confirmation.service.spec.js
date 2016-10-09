import confirmation from './confirmation.module';

describe('ConfirmationService', function () {
  let confirmationService;

  beforeEach(function () {
    angular.mock.module(confirmation);
    angular.mock.inject(function (_confirmationService_) {
      confirmationService = _confirmationService_;
    });
  });

  it('should be defined', function () {
    expect(confirmationService).toBeDefined();
  });

  it('should have onShow subject', function () {
    expect(confirmationService.onShow).toBeDefined();
  });

  describe('show()', function () {
    beforeEach(function () {
      spyOn(confirmationService.onShow, 'next');
    });

    it('should publish given params', function () {
      let title = 'Random title',
        message = 'Random message',
        showPromise = confirmationService.show(title, message);

      expect(showPromise).toBeDefined();
      expect(confirmationService.onShow.next).toHaveBeenCalledWith({ title, message, resolve: jasmine.any(Function), reject: jasmine.any(Function) });
    });
  });
});
