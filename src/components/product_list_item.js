import React from 'react';

const ProductListItem = ({product, onVideoSelect}) => {
  return (
    <li className="list-group-item">
      <div>
        {product.name}
      </div>
    </li>
  );
};

export default ProductListItem;
