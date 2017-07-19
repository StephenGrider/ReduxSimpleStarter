import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

renderList() {
	return this.props.books.map((book) => {
		return(
			<a
				href="#"
				onClick={ () => this.props.selectBook(book) }
				key={book.title}
				className="list-group-item" >
				{book.title}
			</a>
		);
	});
}

	render() {
		return (
			<div className="list-group col-sm-4 select">
				{this.renderList()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return{
	  books: state.books

	};

}

//Anything returned from this function will end as props on the BookList container
function mapDispatchToProps(dispatch){
	//Whenever select book is called. ,the result shoud be passed
	//Wto all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
// it needs to know about this new dispatch method selectBook,
// Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
