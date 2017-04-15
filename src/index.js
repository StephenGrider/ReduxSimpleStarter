import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch  from 'youtube-api-search';
import VideoList from  './components/video_list';
import VideoDetail  from  './components/video_detail';

const API_KEY = 'AIzaSyA6cvJq28dYTJgd9bxrwuoD3Pw9TkjGoos';

class App extends Component {
    constructor( props )
    {
        super( props );

        this.state = { videos : [] };

        this.videoSearch('surfboards')
    }


    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
        });
      }


    render()
    {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
            <SearchBar onSearchTermChange={ term => this.videoSearch(term)} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={video => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}





ReactDOM.render( ( <App /> ), document.querySelector( '.container' ) );
