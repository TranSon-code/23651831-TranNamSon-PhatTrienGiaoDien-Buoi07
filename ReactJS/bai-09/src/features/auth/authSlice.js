import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Giả lập API Login
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  // Trong thực tế sẽ là: const response = await fetch('api/login', {method: 'POST', body: credentials})
  // Ở đây ta giả lập chờ 1s rồi trả về token
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (credentials.username === 'admin' && credentials.password === '123') {
    return { username: 'admin', token: 'SECRET_TOKEN_123' };
  } else {
    throw new Error('Sai tài khoản hoặc mật khẩu!');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.username;
        state.token = action.payload.token;
        // Lưu vào localStorage để F5 không mất login
        localStorage.setItem('user', JSON.stringify(action.payload.username));
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;