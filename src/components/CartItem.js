import React from 'react';
import { useDispatch } from 'react-redux';
import './Cart.css';
import { addToCart, decrease, removeFromCart } from './../store/cart-slice';

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeFromCart(id));
  };

  const decreaseCartItem = () => {
    dispatch(decrease(id));
  };

  const increaseCartItem = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className='cartItem'>
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className='cart-actions' onClick={decreaseCartItem}>
        -
      </button>
      <button className='cart-actions' onClick={increaseCartItem}>
        +
      </button>
      <button className='delete-btn' onClick={removeCartItem}>
        🗑
      </button>
    </div>
  );
};

export default CartItem;
