import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

YTSearch = ({key: API_KEY, term: 'surfboards'}, function(data) {
   console.log(data);
});

// Create a new Component. This component should produce 
// some HTML
const App = () => {
	return (
	  <div>
	   <SearchBar />
	  </div>
    );	
}


ReactDOM.render(<App />, document.querySelector('.container'));
