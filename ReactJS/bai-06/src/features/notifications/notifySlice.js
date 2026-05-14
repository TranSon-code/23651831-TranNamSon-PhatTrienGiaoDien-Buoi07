import { createSlice } from '@reduxjs/toolkit';

const notifySlice = createSlice({
  name: 'notify',
  initialState: {
    messages: [], // Mảng chứa các object: { id, text, type }
  },
  reducers: {
    addNotification: (state, action) => {
      // action.payload: { text: "Thành công!", type: "success" }
      state.messages.push({
        id: Date.now(),
        text: action.payload.text,
        type: action.payload.type || 'info',
      });
    },
    removeNotification: (state, action) => {
      state.messages = state.messages.filter(m => m.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } = notifySlice.actions;
export default notifySlice.reducer;