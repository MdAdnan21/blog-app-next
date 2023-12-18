// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';

const store = configureStore({
  reducer: {
    posts: userReducer, // Assuming you have a 'posts' slice in your Redux store
  },
});

export default store;
