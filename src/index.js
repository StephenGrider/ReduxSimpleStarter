import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YOUTUBE from './config.js';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: '',
      videos: []
    }
    
    YTSearch({ key: YOUTUBE.API_KEY, query: 'sixers' }, (videos) => {
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));