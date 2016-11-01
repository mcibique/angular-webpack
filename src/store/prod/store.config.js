import thunk from 'redux-thunk';

import reducers from '../../reducers';

/* @ngInject */
export default function appConfig($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(reducers, [thunk], []);
}
