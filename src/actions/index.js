export function selectBook(book) {
  //selectBook is an ActionCreator, it returns and action.
  //an object wiht stype property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
