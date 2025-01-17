import { createSlice, configureStore } from '@reduxjs/toolkit';

// Создаем slice для счетчика
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Экспортируем действия (actions)
export const { increment, decrement } = counterSlice.actions;

// Создаем store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Экспорт типов для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
