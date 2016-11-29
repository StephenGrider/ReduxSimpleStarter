import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ProductList from './components/product_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProducts: [ {name: 'Loading...'} ],
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

        that.setState({ products: [
          ...that.state.products,
          { name, cost: msrpInCents / 100, img: mainImage.ref }
        ] });

        that.handleSearch('');
      });
    }

    this.asyncRequest(url, loadProducts);
  }

  handleSearch(searchTerm) {
    const userSelection = this.state.products.filter(item => {
      return JSON.stringify(item.name + item.cost)
        .toLowerCase()
        .includes(searchTerm);
    }).sort((item1, item2) => item1.cost - item2.cost);

    this.setState({selectedProducts: userSelection});
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.handleSearch.bind(this)} />
        <ProductList products={this.state.selectedProducts} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
