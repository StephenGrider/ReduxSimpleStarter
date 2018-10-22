import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import searchYouTube from 'youtube-api-search'; 
import _ from 'lodash'; 

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBXPqnYW52pjXyvrXmLyvNJ1P20Qarncnk';


// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//     console.log(data)
// });
//Or like this





//Like this or^^^^

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null 
        }

        this.videoSearch('black german shepherd puppies')
        
    }

    videoSearch = term => {
        searchYouTube({key: API_KEY, term}, (videos) => {
            this.setState({ 
                videos, 
                selectedVideo: videos[0]
             })
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        //debounce takes the function and it returns a new function that can only be called once every 300 milliseconds. 
        return (
            <div>
                <h1 className = 'page-title'>Jonathan's Video App</h1>
              <SearchBar onSearchTermChange = {videoSearch}/>
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos ={this.state.videos}/>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.querySelector('.container'))