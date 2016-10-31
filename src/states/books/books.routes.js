import booksTemplate from './books.html';

/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state('books', {
    url: '/books',
    template: booksTemplate,
    controller: 'BooksController',
    controllerAs: 'books'
  });
}
