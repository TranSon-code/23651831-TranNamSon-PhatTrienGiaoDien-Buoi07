import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // null nghĩa là chưa đăng nhập
  },
  reducers: {
    login: (state, action) => {
      // action.payload sẽ là object chứa thông tin user
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;