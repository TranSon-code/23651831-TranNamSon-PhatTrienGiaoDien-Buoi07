import { createSlice } from '@reduxjs/toolkit';

// Lấy theme đã lưu từ máy người dùng, nếu chưa có thì chọn 'light'
const initialState = {
  mode: localStorage.getItem('theme') || 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      // Lưu luôn vào máy người dùng để lần sau mở lên vẫn còn
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;