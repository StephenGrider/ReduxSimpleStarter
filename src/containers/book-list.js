import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books_prop.map((book) => {
            return(
                <li key={book.title}
                    onClick={() => this.props.selectBook_prop(book)}
                    className="list-group-item">  {book.title}  </li>
            );
        });
    }

    render (){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props inside of BookList

    return {
      books_prop: state.booksReducer
    };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook_prop: selectBook}, dispatch);
}
//Promote BookList from a component to a container - it needs to know about this dispatch method, selectBook.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);