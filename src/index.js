import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCgpmgwIjb9S6vWjLy-jV2Ep9eYpFR7byk'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'snowboard' }, (videos) => this.setState({ videos }));

  }
  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar />
      </div >
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));