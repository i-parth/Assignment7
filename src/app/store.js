import { configureStore } from '@reduxjs/toolkit';
import items from '../reducers'
export const store = configureStore({
  reducer: {
    arr: items
  }
});