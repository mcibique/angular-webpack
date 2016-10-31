import bookCreateTemplate from './create.html';

/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state('books.create', {
    url: '/create',
    template: bookCreateTemplate,
    controller: 'BookCreateController',
    controllerAs: '$ctrl'
  });
}
