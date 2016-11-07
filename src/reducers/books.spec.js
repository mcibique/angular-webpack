import { createBook, deleteBook, editBook } from '../actions/books';
import booksReducer from './books';

describe('BooksReducer', function () {
  let defaultState;

  beforeEach(function () {
    defaultState = [
      { id: 1, title: 'Book 1' },
      { id: 2, title: 'Book 2' },
      { id: 3, title: 'Book 3' }
    ];
  });

  describe('default state', function () {
    it('should return array of books', function () {
      let state = booksReducer(defaultState, {});
      expect(state).toBe(defaultState);
    });
  });

  describe('DELETE_BOOK', function () {
    it('should delete book', function () {
      let bookId = 2;
      let state = booksReducer(defaultState, deleteBook(bookId));
      expect(state).not.toBe(defaultState, 'DELETE_BOOK returned the same array.');
      expect(state.length).toBe(2);

      let deletedBook = state.filter(book => book.id === bookId)[0]; // state.find(book => book.id === bookId) doesn't work with PhantomJS2
      expect(deletedBook).toBeUndefined();
    });
  });

  describe('CREATE_BOOK', function () {
    it('should create book', function () {
      let book = { title: 'Book 4' };
      let state = booksReducer(defaultState, createBook(book));
      expect(state).not.toBe(defaultState, 'CREATE_BOOK returned the same array.');
      expect(state.length).toBe(4);

      let createdBook = state.filter(book => book.id === 4)[0]; // state.find(book => book.id === bookId) doesn't work with PhantomJS2
      expect(createdBook).toBeDefined();
      expect(createdBook).not.toBe(book, 'CREATE_BOOK added the same book object.');
      expect(createdBook.title).toBe(book.title);
    });
  });

  describe('EDIT_BOOK', function () {
    it('should edit book', function () {
      let bookId = 2;
      let book = { id: bookId, title: 'Book 22' };
      let state = booksReducer(defaultState, editBook(book));
      expect(state).not.toBe(defaultState, 'EDIT_BOOK returned the same array.');
      expect(state.length).toBe(3);

      let editedBook = state.filter(book => book.id === bookId)[0]; // state.find(book => book.id === bookId) doesn't work with PhantomJS2
      expect(editedBook).toBeDefined();
      expect(editedBook).not.toBe(book, 'EDIT_BOOK updated the same book object.');
      expect(editedBook.title).toBe(book.title);
    });
  });
});
