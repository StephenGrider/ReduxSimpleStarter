import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import searchYouTube from 'youtube-api-search'; 


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

        this.videoSearch('surfboards')
        
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
        return (
            <div>
              <SearchBar onSearchTermChange = { term => this.videoSearch(term)}/>
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos ={this.state.videos}/>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.querySelector('.container'))