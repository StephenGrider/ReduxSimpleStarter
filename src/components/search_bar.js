import React, { Component } from "react";

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  // this is "class" component.
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.handleInputChange(event.target.value)}
          value={this.state.term}
        />
        {/* Value of Input: {this.state.search_term} */}
      </div>
    );
  }

  handleInputChange(term) {
    this.setState({
      term: term
    });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
