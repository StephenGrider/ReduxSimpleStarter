import React, { Component } from 'react';

export default class ToDoItem extends Component {

    state= {
        isDone: false
    };

    updateStatus = (event) => {
        this.setState({ isDone: event.target.checked})
    };

    renderItem = () => {
        const itemName = this.props.name;
        if(this.state.isDone) {
            return (<strike>{ itemName }</strike>);
        }
        return itemName;
    };

    render() {
        return (
            <div>
                <input type='checkbox' value={this.state.isDone} onChange={this.updateStatus} />
                <label>{ this.renderItem() }</label>
            </div>
        );
    }
}
