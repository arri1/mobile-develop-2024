import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 10;
    },
    decrement: (state) => {
      state.counter -= 10;
    },
  },
});
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
