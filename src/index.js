import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import VideoList from "./components/video_list";

const API_KEY = 'AIzaSyD9YkpRo4VP5QbIp96MOcFHNHmvF2zMRlk';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = { 
    videos: [],
    selectedVideo: null  
  };

    YTSearch({key: API_KEY, term: 'jehovah god'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  render() {
    return (
    <div>
    <SearchBar />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
    video={this.state.videos} />
    </div>
    ); 
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
