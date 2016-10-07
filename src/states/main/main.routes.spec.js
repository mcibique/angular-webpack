import main from './main.module';

describe('Main routes', function () {
  let $state;

  beforeEach(function () {
    angular.mock.module(main);
    angular.mock.inject(function (_$state_) {
      $state = _$state_;
    });
  });

  describe('main state', function () {
    let mainState;

    beforeEach(function () {
      mainState = $state.get('main');
    });

    it('should register main state', function () {
      expect(mainState).toBeDefined();
    });

    it('should have controller', function () {
      expect(mainState.controller).toBe('MainController');
    });

    it('should have template', function () {
      expect(mainState.template).toBeDefined();
    });

    it('should point to root url', function () {
      expect(mainState.url).toBe('/');
    });
  });
});
