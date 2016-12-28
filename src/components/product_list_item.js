import React from 'react';

const ProductListItem = ({product}) => {
  return (
    <li>
      <div>
        {product.name}
      </div>
      <div>
        ${product.cost}
      </div>
      <div>
        <img src={product.img} />
      </div>
    </li>
  );
};

export default ProductListItem;
