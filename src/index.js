import React from 'react';
import ReactDOM from 'react-dom';

import {config} from './config';
import SearchBar from './components/search_bar';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));