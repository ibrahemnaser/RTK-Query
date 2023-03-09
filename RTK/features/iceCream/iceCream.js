const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const iceState = {
  numOfIce: 100,
};
const iceSlice = createSlice({
  name: "ice",
  initialState: iceState,
  reducers: {
    decreaseIce: (state, action) => {
      state.numOfIce -= action.payload;
    },
    increaseIce: (state, action) => {
      state.numOfIce += action.payload;
    },
  },
  // old extraReducer
  // extraReducers: {
  //   "cake/decreaseCake": (state, action) => {
  //     state.numOfIce -= action.payload;
  //   },
  // },

  // ********* Newer
  extraReducers: (builder) => {
    builder.addCase("cake/decreaseCake", (state, action) => {
      state.numOfIce -= action.payload;
    });
  },
});

module.exports = iceSlice.reducer;
module.exports.iceActions = iceSlice.actions;
