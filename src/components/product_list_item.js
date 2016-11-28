import React from 'react';

const ProductListItem = ({product}) => {
  return (
    <li className="list-group-item">
      <div>
        {product.name}
      </div>
      <div>
        ${product.cost}
      </div>
      <div>
        <img className="image" src={product.img} />
      </div>
    </li>
  );
};

export default ProductListItem;
