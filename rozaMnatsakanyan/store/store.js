import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './numberSlice';

export const store = configureStore({
  reducer: {
    number: numberReducer,
  },
}); 