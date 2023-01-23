import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { userAPI } from "../services/userApi";

// console.log(userAPI);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  // middleware
  middleware: (getDefaultMiddleware) => {
    // console.log(getDefaultMiddleware());
    return getDefaultMiddleware().concat(userAPI.middleware);
  },
});
