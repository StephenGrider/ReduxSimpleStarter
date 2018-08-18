import React from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import searchYouTube from 'youtube-api-search'; 


import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyBXPqnYW52pjXyvrXmLyvNJ1P20Qarncnk';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data)
});
//Or like this



searchYouTube({key: API_KEY, term: 'surfboard', maxResults: 3}, (videos) => {
    console.log(videos)
});

//Like this or^^^^

//Create a new component. This component should produce some HTML
// 
const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    )
}

//Take this components generated HTML and put it on the page (in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'))