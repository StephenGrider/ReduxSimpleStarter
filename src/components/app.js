import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Get Started!'
        };
        this.handleGetStarted = this.handleGetStarted.bind(this);
    }

    handleGetStarted() {
        this.setState({
            'buttonText': 'Started!'
        });
    }

    render() {
        const buttonText = this.state.buttonText;
        return (
            <div>
                <h1>Redux Simple Starter</h1>
                <button className="get-started" onClick={this.handleGetStarted}>{buttonText}</button>
            </div>
        );
    }
}
