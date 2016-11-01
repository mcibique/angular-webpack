import { CREATE_BOOK, DELETE_BOOK, EDIT_BOOK } from '../actions/books';

const defaultState = [{
  id: 1,
  title: 'Book 1',
  author: 'Author Name 1'
}, {
  id: 2,
  title: 'Book 2',
  author: 'Author Name 2'
}, {
  id: 3,
  title: 'Book 3',
  author: 'Author Name 3'
}];

let lastId = defaultState.length;

export default function books(state = defaultState, action) {
  switch (action.type) {
    case DELETE_BOOK:
      return state.filter(book => book.id !== action.id);
    case CREATE_BOOK:
      let book = {
        ...action.book,
        id: ++lastId
      }
      return [...state, book];
    case EDIT_BOOK:
      return state.map(function (book) {
        if (book.id === action.book.id) {
          return { ...action.book }
        } else {
          return book;
        }
      });
    default:
      return state;
  }
}
