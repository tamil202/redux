// parts of function

// import slice from redux

import { createSlice } from "@reduxjs/toolkit";

// inital states mention predefined

const initialState = {
  count: 0,
};

//  create slice

export const counterSlice = createSlice({
  name: "counterSlice_from_redux",
  // direct mention or already defined
  initialState,
  // reducer working functions
  reducers: {
    // function for objects
    increment: (state) => {
      // the state is a access values from initialState
      state.count += 1;
    },
    decrement: (state) => {
      // the state is a access values from initialState
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
