import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCart } from '../store/cart-slice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.qty);

  const handleShowCart = () => {
    dispatch(setShowCart());
  };

  return (
    <div className='cartIcon' onClick={handleShowCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
