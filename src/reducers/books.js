import { DELETE_BOOK } from '../actions/books';

const defaultState = [{
  id: 'book1',
  title: 'Book 1',
  author: 'Author Name 1'
}, {
  id: 'book2',
  title: 'Book 2',
  author: 'Author Name 2'
}, {
  id: 'book3',
  title: 'Book 3',
  author: 'Author Name 3'
}];

export default function books(state = defaultState, action) {
  switch (action.type) {
    case DELETE_BOOK:
    console.log('deleting');
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}
