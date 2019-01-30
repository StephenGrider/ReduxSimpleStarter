import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'



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
