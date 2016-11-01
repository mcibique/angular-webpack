import { editBook } from '../../../actions/books';

/* @ngInject */
export default class BookEditController {
  constructor($ngRedux, $scope, $state, $stateParams) {
    this.$state = $state;
    this.$stateParams = $stateParams;

    let unsubscribe = $ngRedux.connect(this::this.mapStateToThis, { editBook })(this);
    $scope.$on('$destroy', unsubscribe);

    this.formTitle = 'Edit book';
  }

  submit(bookForm) {
    if (bookForm.$invalid) {
      return;
    }
    this.editBook(this.book);
    this.$state.go('books');
  }

  cancel() {
    this.$state.go('books');
  }

  mapStateToThis(state) {
    let id = Number(this.$stateParams.id),
        book = state.books.find(book => book.id === id);

    return {
      book: { ...book }
    };
  }
}
