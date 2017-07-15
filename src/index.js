import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCB9LjpB7-06mtXHbas8KDkQHoBA81733I';



// Create a new component. This component should produce
// some HTML



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'kittens'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
  return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList videos={this.state.videos} />
    </div>
    )
  }
}

// Take this component's generated HTML and put it on
// the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
