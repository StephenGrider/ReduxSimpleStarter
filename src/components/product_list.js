import React from 'react';
import ProductListItem from './product_list_item';

const ProductList = props => {
  const listItems = props.products.map(product => 
    <ProductListItem
      key={product.name}
      product={product} />
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ProductList;
