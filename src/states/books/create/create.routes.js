import bookFormTemplate from '../form/form.html';

/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state('books.create', {
    url: '/create',
    template: bookFormTemplate,
    controller: 'BookCreateController',
    controllerAs: '$ctrl'
  });
}
