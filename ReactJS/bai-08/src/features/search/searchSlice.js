import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Giả lập API tìm kiếm User theo tên
export const searchUsers = createAsyncThunk('search/searchUsers', async (searchTerm) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${searchTerm}`);
  return response.json();
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearResults: (state) => {
      state.results = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;