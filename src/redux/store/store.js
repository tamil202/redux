import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice";

// main store for redux

export const store = configureStore({
  // connect and intermediate
  reducer: {
    counter: counterSlice,
  },
});
