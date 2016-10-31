export const DELETE_BOOK = Symbol('DELETE_BOOK');

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id
  };
}
