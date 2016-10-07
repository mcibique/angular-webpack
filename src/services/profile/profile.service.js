/* @ngInject */
export default class ProfileService {
  constructor($timeout, $q) {
    this.$timeout = $timeout;
    this.$q = $q;

    this.profile = {
      userName: 'random user name',
      lastLoggedIn: new Date()
    };
  }

  getProfile() {
    return this.$q(resolve => {
      this.$timeout(() => {
        resolve(this.profile);
      }, 250, false);
    });
  }
}
