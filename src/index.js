import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = config.SECRET_KEY;


// Create new component and it should produce some html
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // Condensed version of this.setState({ videos: videos})
    });
  }


  render()  {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take component and put it onto page(DOM)

ReactDOM.render(<App/>, document.querySelector(".container"));
