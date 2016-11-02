import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from '../../reducers';
import DevTools from './store.dev-tools';

let logger = createLogger({
  actionTransformer: action => ({
    ...action,
    type: String(action.type)
  })
});

/* @ngInject */
export default function appConfig($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(reducers, [thunk, logger], [DevTools.instrument()]);
}
