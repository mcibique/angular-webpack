import { combineReducers } from 'redux';

import books from './books';
import profile from './profile';

const reducers = combineReducers({
  books,
  profile
});

export default reducers;
