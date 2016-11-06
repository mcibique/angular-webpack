export const DELETE_BOOK = Symbol('DELETE_BOOK');
export const CREATE_BOOK = Symbol('CREATE_BOOK');
export const EDIT_BOOK = Symbol('EDIT_BOOK');

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id
  };
}

export function createBook(book) {
  return {
    type: CREATE_BOOK,
    book
  };
}

export function editBook(book) {
  return {
    type: EDIT_BOOK,
    book
  };
}
