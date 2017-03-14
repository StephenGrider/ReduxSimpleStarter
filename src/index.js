import React from 'react';
import ReactDOM from 'react-dom'
//Create a component
const App=() =>{
    return <div>Hello World</div>
}
//Add component to page
ReactDOM.render(<App />, document.querySelector('.container'));