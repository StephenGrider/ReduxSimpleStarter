import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YoutubeHeader from './components/mini-yt-header';

const API_KEY = 'AIzaSyBs8HechEIQEcpnJLWHwNS_CYLEU5-XROA';

// Create a new component
// This component should produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
      };
      this.videoSearch('Chance The Rapper');
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log(this.state);
    })

  }
  render(){
    return (
    <div>
      <YoutubeHeader />
      <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
    </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
