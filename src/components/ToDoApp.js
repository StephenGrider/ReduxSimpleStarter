import React, { Component } from 'react';
import ToDoList from './ToDoList.js'
import AddItem from './AddItem.js'

export default class ToDoApp extends Component {

    state = {
        items: []
    }

    addItemToList = (item) => {
        this.setState({
            ...this.state,
            items: this.state.items.concat(item)
        });
    };

    render() {
        return (
            <div>
                <AddItem onAdd={this.addItemToList} />
                <ToDoList items={this.state.items} />
            </div>
        );
    }
}
