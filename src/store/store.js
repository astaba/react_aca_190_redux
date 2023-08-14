import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../slices/counter/counterSlice";
import authSliceReducer from "../slices/auth/authSlice";

const store = configureStore({
  reducer: {
    counterState: counterReducer,
    authState: authSliceReducer,
  },
});

export default store;
