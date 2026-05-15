import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import notifyReducer from '../features/notify/notifySlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    notify: notifyReducer,
  },
});