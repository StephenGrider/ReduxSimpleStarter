import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import ProductList from './components/product_list';

const API_KEY = 'AIzaSyCsr55vEo8jVDKmwFJ8yiDGnWA5PeuPJQU';

class App extends Component {
  constructor(props) {
    super(props);

    this.videoSearch = this.videoSearch.bind(this);

    this.state = {
      products: [],
    };

    // this.videoSearch('surfboards');
    this.fetchProducts();
  }

  fetchProducts() {
    const url = 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js';
    const xmlHttp = new XMLHttpRequest();
    const that = this;
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        const objects = JSON.parse(xmlHttp.responseText);
        objects.products.forEach(( {name, msrpInCents, mainImage, mainImage: {ref}} ) => {
          console.log(name, msrpInCents, ref);
          that.setState({ products: [...that.state.products, { name, cost: msrpInCents / 100, img: mainImage.ref } ] });
        });
      }
    }

    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    // const videoSearch = _.debounce(this.videoSearch, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ () => {} } />
        <ProductList
          products={this.state.products} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
