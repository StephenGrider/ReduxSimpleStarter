import React, { Component } from 'react'; //used to create/manage components
import ReactDOM from 'react-dom'; //used to interact with actual dom
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyC8mevAQqji8_1A7-NkN9I6B7DxYpL2twY";

// Create a new compnent. This componet should produce some HTML

//functional components used whenever taking in info and spitting out jsx, also funcitonal component can contain class based components
//considered a class "App"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'magic the gathering'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo : videos[0]
      }); 
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML. and put it on the page (in the DOM)

// <App /> wrapping it in < /> tags makes it an instance
ReactDOM.render(<App />, document.querySelector('.container')); //2nd argument is location of where to render 1st argument on the DOM