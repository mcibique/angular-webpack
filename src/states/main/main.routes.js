import mainTemplate from './main.html';

/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    template: mainTemplate,
    controller: 'MainController',
    controllerAs: 'main'
  });
}
