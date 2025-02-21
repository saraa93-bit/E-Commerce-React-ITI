// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import searchReducer from './searchSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
  },
});