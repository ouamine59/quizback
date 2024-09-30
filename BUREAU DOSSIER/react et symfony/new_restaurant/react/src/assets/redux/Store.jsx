  import {configureStore}  from '@reduxjs/toolkit'
  import AlertSlice from './AlertSlice';

const store = configureStore({
  reducer: {
    message: AlertSlice
  },
}
);

export default store;