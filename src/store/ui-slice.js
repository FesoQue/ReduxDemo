import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: '',
  open: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNotification(state, action) {
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
      // return (state = {
      //   message: action.payload.message,
      //   type: action.payload.type,
      //   open: action.payload.open,
      // });
    },
  },
});

export const { showNotification } = uiSlice.actions;
