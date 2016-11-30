import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC_XvStCGm1z1suSkSnjeTkciTWMJQFjMc';


// Create a new component.  This component should produce some HTML
// constructor will run on page load because we make a new instance of App, which will immediately kick off a searchwith the term surfboards, then the callback function will be called with the list of videos
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos })
    });
  };

  render() { 
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }  
} 

// Take this component's generated HTML and put it in the DOM
// first arg is instance of App function, and second arg is where to place the rendered HTML

ReactDOM.render(<App />, document.querySelector('.container'));
