import { Subject } from 'rxjs/Subject';

/* @ngInject */
export default class ConfirmationService {
  constructor($q) {
    this.$q = $q;
    this.onShow = new Subject();
  }

  show(title, message) {
    return this.$q((resolve, reject) => {
      this.onShow.next({ title, message, resolve, reject });
    });
  }
}
