// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';

const store = configureStore({
  reducer: {
    userSlice,
  },
});

export default store;
