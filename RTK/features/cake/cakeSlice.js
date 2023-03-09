const createSlice = require("@reduxjs/toolkit").createSlice;

const cakeState = {
  numOfCakes: 100,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: cakeState,
  reducers: {
    decreaseCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    increaseCake: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;

module.exports.cakeActions = cakeSlice.actions;
