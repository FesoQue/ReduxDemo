import { showNotification } from '../store/ui-slice';

// *FETCH DATA FROM FIREBASE
const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        'https://auth-test-with-routing-prod-default-rtdb.firebaseio.com/cartItems.json'
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
    } catch (error) {}
  };
};

// * THUNK AND ACTION CREATOR
export const sendCartData = (cart) => {
  return async (dispatch) => {
    // sending request
    dispatch(
      showNotification({
        open: true,
        message: 'sending request',
        type: 'warning',
      })
    );

    const sendRequest = async () => {
      // fetch
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
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        showNotification({
          open: false,
          message: 'sending request failed',
          type: 'error',
        })
      );
    }
  };
};
