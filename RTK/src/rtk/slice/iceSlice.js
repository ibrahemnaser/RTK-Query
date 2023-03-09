import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIce: 200,
};

const iceSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    decreaseIce: (state, action) => {
      state.numOfIce -= action.payload;
    },
    increaseIce: (state, action) => {
      state.numOfIce += action.payload;
    },
  },
});

export default iceSlice.reducer;
export const { decreaseIce, increaseIce } = iceSlice.actions;
