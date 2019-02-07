import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBZO62YgvAL3d0JIJnT5VQssG_jWV-94sg';

// Create a new Component. This component should produce 
// some HTML

class App extends Component {

    constructor(props){
     super(props);

     this.state = { videos:[]};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
          this.setState({ videos});
          //this.setState({ videos: videos});
        });
    }



	render() {
	 return (
	    <div>
	      <SearchBar />
	      <VideoDetail video={this.state.video[0] />
	      <VideoList videos={this.state.videos} />
	    </div>
     );	
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
