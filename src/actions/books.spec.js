import * as bookActions from './books';

describe('Book actions', function () {
  describe('Delete book', function () {
    it('should have DELETE_BOOK action type', function () {
      expect(bookActions.DELETE_BOOK).toBeDefined();
    });

    it('should have deleteBook action', function () {
      expect(bookActions.deleteBook).toBeDefined();
    });

    it('should create DELETE_BOOK action', function () {
      let bookId = 42;
      let action = bookActions.deleteBook(bookId);
      expect(action.type).toBe(bookActions.DELETE_BOOK);
      expect(action.id).toBe(bookId);
    });
  });

  describe('Create book', function () {
    it('should have CREATE_BOOK action type', function () {
      expect(bookActions.CREATE_BOOK).toBeDefined();
    });

    it('should have createBook action', function () {
      expect(bookActions.createBook).toBeDefined();
    });

    it('should create CREATE_BOOK action', function () {
      let book = { id: 42 };
      let action = bookActions.createBook(book);
      expect(action.type).toBe(bookActions.CREATE_BOOK);
      expect(action.book).toBe(book);
    });
  });

  describe('Edit book', function () {
    it('should have EDIT_BOOK action type', function () {
      expect(bookActions.EDIT_BOOK).toBeDefined();
    });

    it('should have editBook action', function () {
      expect(bookActions.createBook).toBeDefined();
    });

    it('should create EDIT_BOOK action', function () {
      let book = { id: 42 };
      let action = bookActions.editBook(book);
      expect(action.type).toBe(bookActions.EDIT_BOOK);
      expect(action.book).toBe(book);
    });
  });
});