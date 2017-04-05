import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import {config} from './config';
import SearchBar from './components/search_bar';

YTSearch({ key: config.API_KEY, term: 'surfboard' }, function(data) {
    console.log(data);
});

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));