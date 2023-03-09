const axios = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;

// async thunk
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const userState = {
  isLoading: false,
  data: [],
  error: "",
};

// under the hood pending, fullfilled, rejected
const fetchData = createAsyncThunk("user/fetchData", () => {
  return axios
    .get("https://dummyjson.com/userss")
    .then((res) => {
      console.log("///////******************/////////");
      console.log(res);
      console.log("///////******************/////////");
      const { users } = res.data;
      return users;
    })
    .catch((err) => console.log(err));
});

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  // async reducer
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    // fulfilled
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    // rejected
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchData = fetchData;
