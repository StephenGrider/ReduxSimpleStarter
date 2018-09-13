import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";
import VideoDetail from "./components/video_detail";
//When called First argument will be an object with search term and a API key (YTSearch)
const API_KEY = "AIzaSyBsFaXQ6kwhPrz3meWceF3xletc2yGkBKY"; //we make a call to API to get its
//,,,information so ALL COMPONENTS know about this videos
// Create a new component. This component should
//produce some HTML

//App is the most parent component and therefore the place where to get the data from API
//it is a class component to make sure it keeps track of videos
class App extends Component {
  //QUE SIGNIFICA HACER OTRO INSTANCE OF APP CON CONSTRUCTOR
  constructor(props) {
    //When new search input we conduct ns and set results on state
    super(props); //constructor always gets called with props

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      //functions gets called with response data
      //console.log(data);Since we want data to show right away  we add YTSearch in the constructor
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // or  {videos:videos}
    });
  }
  render() {
    /* (miParametro) => this.setState({selectedVideo: miParametro}) */

    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
        {/* {  videos: [] } */}
      </div>
    );
  }
  // videos es props y this.state.videos is the value of props
}

ReactDOM.render(<App />, document.querySelector(".container"));
