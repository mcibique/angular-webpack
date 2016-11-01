import { createBook } from '../../../actions/books';

/* @ngInject */
export default class BookCreateController {
  constructor($ngRedux, $scope, $state) {
    let unsubscribe = $ngRedux.connect(() => {}, { createBook })(this);
    $scope.$on('$destroy', unsubscribe);

    this.$state = $state;
    this.formTitle = 'Add new book';
  }

  $onInit() {
    this.book = {
      title: '',
      author: ''
    }
  }

  submit(bookForm) {
    if (bookForm.$invalid) {
      return;
    }
    this.createBook(this.book);
    this.$state.go('books');
  }
}
