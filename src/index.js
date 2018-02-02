import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import YOUTUBE from './config.js';
import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js'
import VideoPlayer from './components/VideoPlayer.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
    
    YTSearch({ key: YOUTUBE.API_KEY, query: 'basketball' }, (videos) => {
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));