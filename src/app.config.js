import thunk from 'redux-thunk';
import reducers from './reducers';

/* @ngInject */
export default function appConfig($urlRouterProvider, $locationProvider, $ngReduxProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $ngReduxProvider.createStoreWith(reducers, [thunk], []);
}
