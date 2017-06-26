import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBSlTi-dw31Y4AA50gAO5qLTtzzjOefXqU';


// I will have to establish a downstream dataflow
//  this will permit the most parent component in the application to be responsible


//- create a new component. This component should produce some HTML
//- I can take the idea of state a step further, 
// by creating what's called a controlled field
// also known as a controlled form element
//- a control field is a form element like an input
//  whose value is set by the state, rather than the other way around.
//  a state should dictate the value of the input
// this is declarative
// You use a class based component extends, when you need to update the state/ your data changes over time; when you REACT to user events
//  a functional component may contain a class based component, as I have used in the example below.


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('LMG Presents The A&R Project')

	}
		videoSearch(term){
			YTSearch({key: API_KEY, term: term}, (videos) => {
				this.setState({ 
					videos: videos, 
					selectedVideo: videos[0]
				});
			});
		}
	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail  video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div>
		);
	} 
} 



// Take this component's generated HTML and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'))
