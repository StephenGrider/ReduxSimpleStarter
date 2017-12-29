import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAimvQsPEZuWAvXl4pYuINJEtfNj7XPt-g";

// *****  step 1: create new component. it should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        // videos: videos -- if key and value is the same word, you can just use the word as below.
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // debounce from lodash will make a given function callable once per time given.pm
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// *****  step 2: take this component and put it on the page (DOM).

ReactDOM.render(<App />, document.querySelector(".container")); // create a self closing tag which is an instance that will insert it into the element.
