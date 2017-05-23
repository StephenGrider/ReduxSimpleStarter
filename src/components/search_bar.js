import React, { Component } from 'react'; // import react and pull the component part

/*const SearchBar = () => { //functional component
	return <input />;
};*/

class SearchBar extends Component {
	//called when new instance of SearchBar is created
	constructor(props) {
		super(props); 

		this.state = {term: '' };
	}

	render() {
		//use this.setState to manipulate the state of the input
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({term: event.target.value})} />
			</div>
		);
	}

}

export default SearchBar;