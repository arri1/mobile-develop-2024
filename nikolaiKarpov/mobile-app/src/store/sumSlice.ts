import { createSlice } from '@reduxjs/toolkit';

const sumSlice = createSlice({
  name: 'sum',
  initialState: { lastCalculated: 0 },
  reducers: {
    setLastCalculated: (state, action) => {
      state.lastCalculated = action.payload;
    }
  }
});

export const { setLastCalculated } = sumSlice.actions;
export default sumSlice.reducer;