import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit cho phép viết logic "mutating" như thế này vì nó dùng thư viện Immer bên dưới
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Xuất các action để components có thể sử dụng
export const { increment, decrement } = counterSlice.actions;

// Xuất reducer để store có thể cấu hình
export default counterSlice.reducer;