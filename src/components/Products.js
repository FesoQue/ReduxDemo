import React from 'react';
import Product from './Product';
import { DUMMY_PRODUCTS } from '../data';

const Products = () => {
  return (
    <div>
      <ul className='products-container'>
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
