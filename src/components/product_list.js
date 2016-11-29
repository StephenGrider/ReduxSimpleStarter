import React from 'react';
import ProductListItem from './product_list_item';

const ProductList = props => {
  const listItems = props.products.map(product => 
    <ProductListItem
      key={product.name}
      product={product} />
  );

  if(listItems.length === 0) {
    return (
      <ul>
        Not found
      </ul>
    );
  }

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ProductList;
