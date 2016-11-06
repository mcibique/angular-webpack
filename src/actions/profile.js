export const REQUEST_PROFILE = Symbol('REQUEST_PROFILE');
export const RECEIVE_PROFILE = Symbol('RECEIVE_PROFILE');

export function requestProfile() {
  return {
    type: REQUEST_PROFILE
  };
}

export function receiveProfile(profile) {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
}
