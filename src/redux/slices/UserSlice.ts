// src/features/ttsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Export actions
export const { setToken } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
