import { deleteBook } from '../../actions/books';

/* @ngInject */
export default class BooksController {
  constructor($ngRedux, $scope) {
    let unsubscribe = $ngRedux.connect(this.mapStateToThis, { deleteBook })(this);
    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      items: state.books
    };
  }
}
