import { requestProfile, receiveProfile } from '../actions/profile';
import profileReducer from './profile';

describe('ProfileReducer', function () {
  let defaultState;

  beforeEach(function () {
    defaultState = {
      userName: '',
      fetching: false
    };
  });

  describe('default state', function () {
    it('should return default state', function () {
      let state = profileReducer(defaultState, {});
      expect(state).toBe(defaultState);
    });
  });

  describe('REQUEST_PROFILE', function () {
    let state;

    beforeEach(function () {
      state = profileReducer(defaultState, requestProfile());
    });

    it('should request profile', function () {
      expect(state).not.toBe(defaultState, 'REQUEST_PROFILE returned the same state object.');
    });

    it('should start fecthing', function () {
      expect(state.fetching).toBe(true);
    });
  });

  describe('RECEIVE_PROFILE', function () {
    let userName,
        profile,
        state;

    beforeEach(function () {
      userName = 'Random user name';
      profile = { userName };
      state = profileReducer(defaultState, receiveProfile(profile));
    });

    it('should receive profile', function () {
      expect(state).not.toBe(defaultState, 'RECEIVE_PROFILE returned the same state object.');
      expect(state.userName).toBe(userName);
    });

    it('should set fecthing as complete', function () {
      expect(state.fetching).toBe(false);
    });
  });
});
