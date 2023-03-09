import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "./slice/cakeSlice";
import iceReducer from "./slice/iceSlice";
import catReducer from "./slice/catSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
    cat: catReducer,
  },
});

export default store;
