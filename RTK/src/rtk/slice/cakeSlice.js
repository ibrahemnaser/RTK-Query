import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 500,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    decreaseCake: (state, action) => {
      state.numOfCakes -= action.payload;
    },
    increaseCake: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { decreaseCake, increaseCake } = cakeSlice.actions;
