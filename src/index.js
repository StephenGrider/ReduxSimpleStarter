// Create a new component this component should create HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyDydhXviisO2az_6HksPtGyOjS9QPu30r0';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=>{this.setState({videos})});
    }

    render() {
        return (<div>
            <SearchBar />
        </div>);
    }


}
console.log('Adding in API Work');

// Take this generated HTML and put it on the page (Add to DOM)!!

ReactDOM.render(<App />, document.querySelector('.container'));