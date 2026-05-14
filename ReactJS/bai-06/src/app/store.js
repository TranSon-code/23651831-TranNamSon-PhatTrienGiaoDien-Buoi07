import { configureStore } from '@reduxjs/toolkit';
import notifyReducer from '../features/notifications/notifySlice';

export const store = configureStore({
  reducer: {
    notify: notifyReducer,
  },
});