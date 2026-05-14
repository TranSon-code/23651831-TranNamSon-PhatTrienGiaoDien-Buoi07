import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Danh sách sản phẩm trong giỏ
  },
  reducers: {
    addToCart: (state, action) => {
      // action.payload là object sản phẩm {id, name, price}
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1; // Nếu có rồi thì tăng số lượng
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Chưa có thì thêm mới với qantity = 1
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Nếu số lượng về 0 thì xóa khỏi giỏ
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;