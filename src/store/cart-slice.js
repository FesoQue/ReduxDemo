import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_PRODUCTS } from '../data';
import { showNotification } from './ui-slice';

const initialState = {
  items: [],
  qty: 0,
  showCart: false,
  changed: false,
};

export const cartSlice = createSlice({
  name: 'cart-slice',
  initialState,
  reducers: {
    // update the content of the cart from firebase realtime db
    replaceData(state, action) {
      return { ...state, items: action.payload.items, qty: action.payload.qty };
    },
    // add item to cart && increase cart item
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      // check if item exist
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.qty++;
      }
    },

    // decrease cart item
    decrease(state, action) {
      // state.changed = true;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        const decreaseItem = state.items.filter((item) => item.id !== id);
        return { ...state, items: decreaseItem, qty: state.qty - 1 };
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },

    // remove item from cart
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      const removeItem = state.items.filter((item) => item.id !== id);
      return { ...state, items: removeItem, qty: state.qty - 1 };
    },

    // show cart
    setShowCart(state) {
      return { ...state, showCart: !state.showCart };
    },
  },
});

export const { replaceData, addToCart, decrease, removeFromCart, setShowCart } =
  cartSlice.actions;
