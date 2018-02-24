import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js'

export default class ToDoList extends Component {
    renderItem = (item) => {
        console.log('item: ', item);
        return (<ToDoItem name={item} />);
    };

    getItems = () => {
        return this.props.items.map((item, key) => <ToDoItem key={key} name={item} />);
    };

    render() {
        return (
            <div>
                { this.getItems() }
            </div>
        );
    }
}
