import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAGMgh7QKPSGbjOV-JEVug4TCtyET_Vfuo';

const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
};

// Attach this component's generated html and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
