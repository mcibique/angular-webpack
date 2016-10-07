import profile from './profile.module';

describe('ProfileService', function () {
  let $timeout,
    profileService;

  beforeEach(function () {
    angular.mock.module(profile);
    angular.mock.inject(function (_$timeout_, _profileService_) {
      $timeout = _$timeout_;
      profileService = _profileService_;
    });
  });

  afterEach(function () {
    $timeout.verifyNoPendingTasks();
  });

  it('should be defined', function () {
    expect(profileService).toBeDefined();
  });

  describe('getProfile()', function () {
    it('should always return a profile', function () {
      profileService
        .getProfile()
        .then(function (result) {
          expect(result).toBeDefined();
        });

      $timeout.flush();
    });
  });
});
