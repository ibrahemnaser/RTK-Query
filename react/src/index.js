import React from "react";
import { createRoot } from "react-dom/client";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import App from "./app";
import rootReducer from "./redux";

const store = createStore(rootReducer, applyMiddleware(thunk)); // store & middleware

// const store = createStore(rootReducer); // store

// console.log(store.getState()); // pure redux without react-redux

// 1) ==> Provide from 'react-redux' to connect react with store

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
