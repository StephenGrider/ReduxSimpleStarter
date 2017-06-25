import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBSlTi-dw31Y4AA50gAO5qLTtzzjOefXqU';

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


const App = function(){
	return (
		<div>
			<SearchBar />
			This is working!
		</div>
	); 
} 



// Take this component's generated HTML and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'))
