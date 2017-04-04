import React from 'react';
import ReactDOM from 'react-dom';
import {config} from './config';

const App = () => {
    return <div>Hi!</div>
}
console.log(config);

ReactDOM.render(<App />, document.querySelector('.container'));