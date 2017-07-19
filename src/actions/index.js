export function selectBook(book) {

//selectBook is an ActionCreator, it needs to return an Action
//an Object with a type property.
	console.log("ActionCreator -- > book has been selected:",book.title);
	console.log({book});
	return{
		type: 'BOOK_SELECTED',
		payload: book
	};
}
