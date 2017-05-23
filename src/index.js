import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBXdX7W-Wyt85A1q36DRIEKFpCNnldsJ-o';



// Create a new component. This component should produce some HTML
// ALWAYS ONE COMPONENT PER FILE

//const declares a constant variable (never will be reassigned)

/*const App = function() { // Think of this as a factory that creates instances of App component 'class'
	return <div>Hi!</div>;
}*/

// re-written with => operator 
/*const App = () => { 
	return (
		<div>
			<SearchBar />
		</div>
	);
}
*/
// Data changing over time in a component : think STATE. and constructor


class App extends Component {
	constructor(props){
		super(props);

		this.state = {videos: []};
		
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// this.setState({videos: videos});
			// ES6 allows us to condense the above to (only when key and value are same name):
			this.setState({videos});
		});
	}


	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos} /> {/*passing props --videos-- (use {} when referencing JS variable)*/}
			</div>
		);
	}
}

// Take this component's generate HTML and put it on the page (in the DOM)

//ReactDOM.render(React.createElement(App));
ReactDOM.render(<App />, document.querySelector('.container'));