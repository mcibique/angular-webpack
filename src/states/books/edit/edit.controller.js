import { editBook } from '../../../actions/books';

/* @ngInject */
export default class BookEditController {
  constructor($ngRedux, $scope, $state, $stateParams) {
    let unsubscribe = $ngRedux.connect(this.mapStateToThis.bind(this, $stateParams), { editBook })(this);
    $scope.$on('$destroy', unsubscribe);

    this.$state = $state;
    this.formTitle = 'Edit book';
  }

  submit(bookForm) {
    if (bookForm.$invalid) {
      return;
    }
    this.editBook(this.book);
    this.$state.go('books');
  }

  mapStateToThis($stateParams, state) {
    let id = +$stateParams.id,
        book = state.books.find(book => book.id === id);

    return {
      book: { ...book }
    };
  }
}
