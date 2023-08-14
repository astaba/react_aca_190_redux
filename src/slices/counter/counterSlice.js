import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  isShown: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (!action.payload) action.payload = 1;
      state.counter += action.payload;
    },
    decrement: (state, action) => {
      if (!action.payload) action.payload = 1;
      state.counter -= action.payload;
    },
    toggle: (state) => {
      state.isShown = !state.isShown;
    },
  },
});

export default counterSlice.reducer;
export const counterSliceActions = counterSlice.actions;
