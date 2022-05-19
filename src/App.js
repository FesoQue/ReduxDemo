import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/Notification';
import { showNotification } from './store/ui-slice';
import { fetchData, sendCartData } from './components/cart-actions';

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const open = useSelector((state) => state.ui.open);
  const message = useSelector((state) => state.ui.message);
  const type = useSelector((state) => state.ui.type);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    /*
    const sendRequest = async () => {
      // sending request
      dispatch(
        showNotification({
          open: true,
          message: 'sending request',
          type: 'warning',
        })
      );

      const res = await fetch(
        'https://auth-test-with-routing-prod-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();

      // request is successful
      dispatch(
        showNotification({
          open: true,
          message: 'sent request to database successfully',
          type: 'success',
        })
      );
    };
    sendRequest().catch((error) => {
      // sending request
      if (error) {
        dispatch(
          showNotification({
            open: false,
            message: 'sending request failed',
            type: 'error',
          })
        );
      }
    }); */

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className='App'>
      {open && <Notification open={open} message={message} type={type} />}

      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
