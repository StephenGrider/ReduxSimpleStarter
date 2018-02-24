import React, { Component } from 'react';

export default class AddItem extends Component {

    state = {
        currItem: ''
    }

    changeItem = (event) => {
        this.setState({ currItem: event.target.value });
    };

    addItemToList = () => {
        this.props.onAdd(this.state.currItem);
        this.clearInput();
    };

    clearInput = () => {
        this.setState({ currItem: ''});
    }

    render() {
        return (
            <div>
                <input type='text'
                    value={this.state.currItem}
                    onChange={this.changeItem} />
                <input type='button' defaultValue='+' onClick={this.addItemToList} />
            </div>
        );
    }
}
