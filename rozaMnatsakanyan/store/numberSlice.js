import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
  name: 'number',
  initialState: {
    value: 0,
    lastUpdated: null,
  },
  reducers: {
    setNumber: (state, action) => {
      state.value = action.payload;
      state.lastUpdated = new Date().toLocaleString();
    },
  },
});

export const { setNumber } = numberSlice.actions;
export default numberSlice.reducer; 