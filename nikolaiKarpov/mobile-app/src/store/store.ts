import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import sumReducer from './sumSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sum: sumReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;