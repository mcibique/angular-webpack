import thunk from 'redux-thunk';

import reducers from '../../reducers';
import DevTools from './store.dev-tools';

/* @ngInject */
export default function appConfig($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(reducers, [thunk], [DevTools.instrument()]);
}
