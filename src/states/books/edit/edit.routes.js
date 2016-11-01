import bookFormTemplate from '../form/form.html';

/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state('books.edit', {
    url: '/edit/:id',
    template: bookFormTemplate,
    controller: 'BookEditController',
    controllerAs: '$ctrl'
  });
}
