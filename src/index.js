import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyB5BKTc69oBzFC65U2OsNuC0QCMsgTSx2I';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    selectVideo(selectedVideo) {
        this.setState({selectedVideo});
    }

    render() {
        return (
            <div>
                Hello world
                <SearchBar apiKey={API_KEY}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.selectVideo.bind(this)} />
                <VideoDetail video={this.state.selectedVideo}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));