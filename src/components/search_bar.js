import React, { Component } from 'react';
/* 
When should we use functional vs a class based component? 
What additional functionality is granted from the 
extends property?
*/

// // export
// const SearchBar = () =>{
// 	return <input />
// }

//////////////////////////////////////////
// what the HECK is State?!!!
/*

-state is a plain JS object that is used to 
record and react to user events

-each classbased component that we define has
its own state object 

-before we use state inside of a component
we need to initialize the state object

-to initialize state, set the property state to a 
plain JS object in the class's constructor method 

*/
//eventHandler will track each change to the target element
/*
this is named by including: 
-the name of the element that I am looking at and 
-the name of the event itself
*/

/*
How do you manipulate your state?
*/

/*
Why do you want to set and track state?
*/

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.placeholder = {placeholder: 'search for YouTube videos!'}
		this.state = {term: ''};
	}

	render(){
		// return <input onChange={event =>  console.log(event.target.value)} />;
		return (
/*
	- We should comment out the current input 
	and create a way to update the value, 
	when the state changes
*/
			// <div>
			// 	<input onChange={event => this.setState({term: event.target.value})} />;
			// 	Value of the input: {this.state.term}
			// </div>

			<div>
				<input
				// by using this controlled element, I do not render from my input, I update the state and the state is rendered, when it recieves input. If I do not set state with a controlled form, input would not be accepted; it needs the state update to render!
				// I am telling react to take input from state. Input goes to state, and state renders view.
					value = { this.state.term}
					placeholder = {this.placeholder.placeholder} 
					onChange={event => this.setState({term: event.target.value})} />
					{this.state.term}
			</div>
		);
	}
}

export default SearchBar;