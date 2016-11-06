import profile from './profile.module';

import * as actions from '../../actions/profile';

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

  it('should be defined', function () {
    expect(profileService).toBeDefined();
  });

  describe('getProfile()', function () {
    it('should be defined', function () {
      expect(profileService.getProfile).toBeDefined();
    });

    it('should always return a function', function () {
      let getProfile = profileService.getProfile();
      expect(typeof getProfile).toBe('function');
    });

    it('should fetch the profile', function () {
      let requestProfileAction = {};
      let receiveProfileAction = {};

      spyOn(actions, 'requestProfile').and.returnValue(requestProfileAction);
      spyOn(actions, 'receiveProfile').and.returnValue(receiveProfileAction);

      let dispatch = jasmine.createSpy('dispatch');
      let getProfile = profileService.getProfile();
      let promise = getProfile(dispatch);
      expect(promise).toBeDefined();
      expect(actions.requestProfile).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(requestProfileAction);

      $timeout.flush();
      $timeout.verifyNoPendingTasks();
      promise.then(function (profile) {
        expect(profile).toBeDefined();
        expect(actions.receiveProfile).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(receiveProfileAction);
      });
    });
  });
});
