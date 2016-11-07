import * as profileActions from './profile';

describe('Profile actions', function () {
  describe('Request profile', function () {
    it('should have REQUEST_PROFILE action type', function () {
      expect(profileActions.REQUEST_PROFILE).toBeDefined();
    });

    it('should have requestProfile action', function () {
      expect(profileActions.requestProfile).toBeDefined();
    });

    it('should create REQUEST_PROFILE action', function () {
      let action = profileActions.requestProfile();
      expect(action.type).toBe(profileActions.REQUEST_PROFILE);
    });
  });

  describe('Receive profile', function () {
    it('should have RECEIVE_PROFILE action type', function () {
      expect(profileActions.RECEIVE_PROFILE).toBeDefined();
    });

    it('should have receiveProfile action', function () {
      expect(profileActions.receiveProfile).toBeDefined();
    });

    it('should create RECEIVE_PROFILE action', function () {
      let profile = { id: 42 }
      let action = profileActions.receiveProfile(profile);
      expect(action.type).toBe(profileActions.RECEIVE_PROFILE);
      expect(action.profile).toBe(profile);
    });
  });
});