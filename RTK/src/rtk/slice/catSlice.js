import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export const fetchCat = createAsyncThunk("cat/fetchCat", async (param) => {
  try {
    console.log(param);
    const res = await axios.get("https://api.thecatapi.com/v1/images/search0");
    return res.data;
  } catch (err) {
    throw Error("Error::");
  }
});
export const putCat = createAsyncThunk("cat/fetchCat", async (param) => {
  try {
    console.log(param);
    const res = await axios.get("https://api.thecatapi.com/v1/images/search0");
    return res.data;
  } catch (err) {
    throw Error("Error::");
  }
});

const catSlice = createSlice({
  name: "cat",
  initialState,
  extraReducers: (bulider) => {
    // pending
    bulider.addCase(fetchCat.pending, (state) => {
      state.isLoading = true;
    });
    // fulfilled
    bulider.addCase(fetchCat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    });
    // rejected
    bulider.addCase(fetchCat.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
    /////
    // pending
    bulider.addCase(fetchCat.pending, (state) => {
      state.isLoading = true;
    });
    // fulfilled
    bulider.addCase(fetchCat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    });
    // rejected
    bulider.addCase(fetchCat.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default catSlice.reducer;

