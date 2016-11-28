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

    this.state = {
      products: [],
    };

    this.fetchProducts();
  }

  asyncRequest(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        callback(xmlHttp.responseText);
      }
    }

    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
  }

  fetchProducts() {
    const url = 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js';
    const that = this;

    function loadProducts(responseText) {
      const objects = JSON.parse(responseText);
      objects.products.forEach(( {name, msrpInCents, mainImage, mainImage: {ref}} ) => {
        console.log(name, msrpInCents, ref);
        that.setState({ products: [...that.state.products, { name, cost: msrpInCents / 100, img: mainImage.ref } ] });
      });
    }

    this.asyncRequest(url, loadProducts);
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <SearchBar onSearchTermChange={ () => {} } />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
