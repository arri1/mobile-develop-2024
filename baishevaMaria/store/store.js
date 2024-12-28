import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  message: 'Нажмите на кнопку!',
  bgColor: '#ffffff',
  theme: 'light', // Начальная тема - светлая
  randomCountry: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setRandomCountry: (state, action) => {
      state.randomCountry = action.payload;
    },
  },
});

export const { setMessage, setBgColor, setTheme, setRandomCountry } = globalSlice.actions;

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});

export default store;