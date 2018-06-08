import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            placeholder: 'Enter a text please',
        };
    }

    onInputChange(event) {
        console.log('Input Value: ' + event.target.value)

        this.setState({term: event.target.value});
    }

    render() {

        return (
            <div>
                <input type="text"
                       onChange={this.onInputChange.bind(this)}
                       placeholder={this.state.placeholder}
                       value={this.state.term}/>
            </div>
        );
    }
}