import React, { Component } from "react";

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  // this is "class" component.
  constructor(props) {
    super(props);

    this.state = {
      search_term: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={this.state.search_term}
        />
        {/* Value of Input: {this.state.search_term} */}
      </div>
    );
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      search_term: event.target.value
    });
  }
}

export default SearchBar;
