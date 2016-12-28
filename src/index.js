import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBs8HechEIQEcpnJLWHwNS_CYLEU5-XROA';

// Create a new component
// This component should produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({videos: data});
      console.log(this.state);
    })
  }
  render(){
    return (
    <div>
      <SearchBar />
    </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
