// Create a new component this component should create HTML
import React from 'react';
import ReactDOM from 'react-dom'
const App = () => {
    return <div>Hello</div>;
}

// Take this generated HTML and put it on the page (Add to DOM)!!

ReactDOM.render(<App />, document.querySelector('.container'));