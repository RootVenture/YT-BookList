const BOOK_SELECTED = 'BOOK_SELECTED';

// selectBook is an ActionCreator, it needs to return an action w/ a type and payload
export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book,
  };
}
