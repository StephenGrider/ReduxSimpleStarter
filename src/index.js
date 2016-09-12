// create/manage components
import React, { Component } from 'react';
// insert elements to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCsr55vEo8jVDKmwFJ8yiDGnWA5PeuPJQU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    console.log(`searching ${ term }`)
    YTSearch({key: API_KEY, term}, videos => {
      console.log('Finished YT search: videos: ', videos)
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Place it on the DOM
// < /> creates an instance of the element
ReactDOM.render(<App />, document.querySelector('.container'));