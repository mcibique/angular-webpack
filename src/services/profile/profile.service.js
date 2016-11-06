import { requestProfile, receiveProfile } from '../../actions/profile';

/* @ngInject */
export default class ProfileService {
  constructor($timeout) {
    this.$timeout = $timeout;
  }

  getProfile() {
    return (dispatch) => {
      dispatch(requestProfile());

      function fetchProfile() {
        return {
          userName: 'testUser',
          firstName: 'Test',
          lastName: 'User',
          lastLoggedIn: new Date()
        };
      }

      return this
        .$timeout(fetchProfile, 1000)
        .then(profile => dispatch(receiveProfile(profile)));
    };
  }
}
