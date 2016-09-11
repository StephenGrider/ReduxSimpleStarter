// create/manage components
import React, { Component } from 'react';
// insert elements to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCsr55vEo8jVDKmwFJ8yiDGnWA5PeuPJQU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return <div><SearchBar/></div>;
  }
}

// Place it on the DOM
// < /> creates an instance of the element
ReactDOM.render(<App />, document.querySelector('.container'));