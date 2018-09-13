import React, { Component } from "react";
//Initiates  going through this.state then  to render and if onChange triggers
// will cycle again, that is why term will have starting value
class SearchBar extends Component {
  //class needs to be aware of state in some fashion
  //reacting to user events
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      term: ""
    };
  }
  render() {
    console.log("SearchBar");
    console.log("this.props", this.props);
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // This is called INPUT CONTROLLED COMPONENT: the value is
          //defined by the state it can only change when the state changes
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
