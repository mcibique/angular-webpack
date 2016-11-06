import main from './main.module';

describe('MainController', function () {
  let $controller,
      $rootScope,
      $scope,
      $q,
      $ngRedux;

  beforeEach(function () {
    angular.mock.module(main);
    angular.mock.inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);
      $q = _$q_;

      $ngRedux = jasmine.createSpyObj('$ngRedux', ['connect']);
      $ngRedux.connect.and.returnValue(() => {});
    });
  });

  describe('constructor', function () {
    let mainController;

    beforeEach(function () {
      mainController = $controller('MainController', { $ngRedux, $scope });
    });

    it('should create MainController object', function () {
      expect(mainController).toBeDefined();
    });

    it('should initialize the title', function () {
      expect(mainController.title).toBeTruthy();
    });

    it('should connect actions', function () {
      expect($ngRedux.connect).toHaveBeenCalled();
    });
  });

  describe('$onInit()', function () {
    let mainController,
        profileAction,
        profileService;

    beforeEach(function () {
      profileAction = {};
      profileService = jasmine.createSpyObj('profileService', ['getProfile']);
      profileService.getProfile.and.returnValue(profileAction);

      mainController = $controller('MainController', { $ngRedux, $scope, profileService });
      mainController.dispatch = jasmine.createSpy('dispatch');

      mainController.$onInit();
    });

    it('should initialize profile', function () {
      expect(profileService.getProfile).toHaveBeenCalled();
      expect(mainController.dispatch).toHaveBeenCalledWith(profileAction);
    });
  });

  describe('openConfirmation()', function () {
    let mainController,
        confirmationDefered,
        confirmationService;

    beforeEach(function () {
      confirmationDefered = $q.defer();
      confirmationService = jasmine.createSpyObj('confirmationService', ['show']);
      confirmationService.show.and.returnValue(confirmationDefered.promise);

      mainController = $controller('MainController', { $ngRedux, $scope, confirmationService });
    });

    it('should start with empty confirmation result', function () {
      expect(mainController.confirmationResult).not.toBeDefined();
    });

    it('should open confirmation', function () {
      mainController.openConfirmation();

      expect(confirmationService.show).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String));
    });

    it('should display confirmed result', function () {
      mainController.openConfirmation();

      confirmationDefered.resolve();
      $rootScope.$digest();
      expect(mainController.confirmationResult).toBeDefined();
      expect(mainController.confirmationResult.length).toBeGreaterThan(0);
    });

    it('should display cancelled result', function () {
      mainController.openConfirmation();

      confirmationDefered.reject();
      $rootScope.$digest();
      expect(mainController.confirmationResult).toBeDefined();
      expect(mainController.confirmationResult.length).toBeGreaterThan(0);
    });
  });
});
