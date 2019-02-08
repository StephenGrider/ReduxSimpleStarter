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

     this.state = { 
     	videos:[],
     	selectedVideo: null
      };

        this.videoSearch('steve jobs');
    }

    videoSearch(term) {

     YTSearch({key: API_KEY, term: 'term'}, (videos) => {
          this.setState({ 
          	videos: videos,
          	selectedVideo: videos[0]
          });
          //this.setState({ videos: videos});
        });
    }


	render() {
	 return (
	    <div>
	      <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
	      <VideoDetail video={this.state.selectedVideo}  />
	      <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	      videos={this.state.videos} />
	    </div>
     );	
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
