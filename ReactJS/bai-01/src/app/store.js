import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Khai báo rằng state 'counter' sẽ do counterReducer quản lý
  },
});