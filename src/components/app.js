import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBZO62YgvAL3d0JIJnT5VQssG_jWV-94sg';

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
