import React, { Component } from 'react';

class Searchbar extends Component {
    constructor( props )
    {
        super( props );

        this.state = { term : '' };
    }

    render()
    {
        return (
            <div  className="search-bar">
                <input onChange={ event => this.setState( { term : event.target.value } ) } />
                {this.state.term}
            </div>
        );
    }
}

export default Searchbar;
