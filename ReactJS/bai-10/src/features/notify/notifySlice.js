import { createSlice } from '@reduxjs/toolkit';

const notifySlice = createSlice({
  name: 'notify',
  initialState: { message: null },
  reducers: {
    showNotify: (state, action) => {
      state.message = action.payload;
    },
    clearNotify: (state) => {
      state.message = null;
    }
  }
});

export const { showNotify, clearNotify } = notifySlice.actions;
export default notifySlice.reducer;