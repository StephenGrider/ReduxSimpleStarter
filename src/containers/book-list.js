import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
   renderList() {
      return this.props.books.map((book) => {
         return (
            <li
            key={book.title}
            onCLick={() => this.props.selectBook(book)}
            className="list-group-item">
               {book.title}
            </li>
         );
      });
   }

   render() {
      return (
         <ul className="list-group col-sm-4">
            {this.renderList()}
         </ul>
      )
   }
}

function mapStateToProps(state) {
   //what ever is retruned will show up as props
   //inside of BookList
   return {
      books: state.books
   };
}

//anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
   //whenerver selectbook is called, the result hsould be passed
   //to all our reducers
   return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote BookList from a Component to a container - it needs to know
//about this new dispatch method, selectBook. Make it availible
//as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
