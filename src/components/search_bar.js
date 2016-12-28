import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: 'Starting Value'};
  }
  render() {
    return <input
    value={this.state.term}
    onChange={this.onInputChange.bind(this)}/>;
  }
  onInputChange(event) {
    console.log(this);
    this.setState({term: event.target.value});
  }
}

export default SearchBar
