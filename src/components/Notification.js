import React from 'react';
import { Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { showNotification } from '../store/ui-slice';
import { useEffect } from 'react';

const Notification = ({ message, type }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleClose = () => {
    //
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        showNotification({
          open: false,
        })
      );
    }, 5000);
  }, [cart]);

  return (
    <div>
      <Alert id='alert' onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </div>
  );
};

export default Notification;
