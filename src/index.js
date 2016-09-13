import React from 'react';
import { render } from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCOnAgW90k5IV0Bs7RuBbb6CsYNRmwnMGY';

const App = function () {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

render(
  <App />,
  document.querySelector('.container')
);
