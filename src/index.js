import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyBEpM6_kQHzfXlBgvyVeUBpB84obomxsbk';


// create a new component. this component should produce 
// some html
const App = () => {
    return (
	    <div>
	    	<SearchBar />
	    </div>
	    );
}



//that this components generated html and put on the page (like the DOM)