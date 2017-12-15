import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyAimvQsPEZuWAvXl4pYuINJEtfNj7XPt-g";

// *****  step 1: create new component. it should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
    console.log(this.state);

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({
        // videos: videos -- if key and value is the same word, you can just use the word as below.
        videos
      });
    });
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

// *****  step 2: take this component and put it on the page (DOM).

ReactDOM.render(<App />, document.querySelector(".container")); // create a self closing tag which is an instance that will insert it into the element.
