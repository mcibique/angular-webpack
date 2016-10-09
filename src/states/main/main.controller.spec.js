import main from './main.module';

describe('MainController', function () {
  let $controller,
    $rootScope,
    $q;

  beforeEach(function () {
    angular.mock.module(main);
    angular.mock.inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $q = _$q_;
    });
  });

  describe('constructor', function () {
    let mainController,
      profileDefered,
      profileService;

    beforeEach(function () {
      profileDefered = $q.defer();
      profileService = jasmine.createSpyObj('profileService', ['getProfile']);
      profileService.getProfile.and.returnValue(profileDefered.promise);

      mainController = $controller('MainController', { profileService });
    });

    it('should create MainController object', function () {
      expect(mainController).toBeDefined();
    });

    it('should initialize the title', function () {
      expect(mainController.title).toBeTruthy();
    });

    it('should initialize the profile', function () {
      let randomProfile = {
        userName: 'random user name'
      };
      profileDefered.resolve(randomProfile);
      $rootScope.$digest();
      expect(mainController.profile).toBe(randomProfile);
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

      mainController = $controller('MainController', { confirmationService });
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
