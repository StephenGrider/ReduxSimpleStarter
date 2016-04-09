import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ytSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyAUTylvGCBsRikNM4JRLNdVlW6vP2NM1iY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    ytSearch({ key: YOUTUBE_API_KEY, term: 'Formation Beyonce' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
