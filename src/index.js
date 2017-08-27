import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBRX8rhQ4Cklra0MV5Mgv4RP80-7bsKibw';

// Create a new component. This component should
// produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in DOM)
//

ReactDOM.render(<App />, document.querySelector('.container'));
