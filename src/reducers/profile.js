import { RECEIVE_PROFILE, REQUEST_PROFILE } from '../actions/profile';

const defaultState = {
  userName: '',
  firstName: '',
  lastName: '',
  lastLoggedIn: null,
  fetching: false
};

export default function profile(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        fetching: true
      };
    case RECEIVE_PROFILE:
      return {
        ...state,
        ...action.profile,
        fetching: false
      };
    default:
      return state;
  }
}
