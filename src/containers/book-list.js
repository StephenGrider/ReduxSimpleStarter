import React, { Component } from 'react';
import { connect } from 'react-redux'; // The glueee
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      // console.log(this.props.asd) >>> 123
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Whenever state changes, our component will re-render.
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // Inside of BookList - this.props
  /*return {
    asd: '123'
  };*/
  return {
    books: state.books
  }; // Object returned is available in our component. The glueee
}

/* Anything returned from this function, will end up as props
on the BookList container. */
function mapDispatchToProps(dispatch) {
  /* Whenever selectBook is called, the result should be passed
  to all of our reducers. */
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// Take this component, this mapStateToProps. Return a container.
// connect(function)(component)
// connect(function,function)(component)

/* Promote BookList from a component to a container,
needs to know about new dispatch method, selectBook.
Make it available as a prop. */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
