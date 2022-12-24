const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const reduxThunk = require("redux-thunk").default;

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "request":
      return {
        ...state,
        isLoading: true,
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload,
      };
    case "fail":
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// fetch users

const fetchUsers = () => {
  return function (dispatch) {
    dispatch({ type: "request" });
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => {
        // const users = res.data.map((ele) => ele.id);
        // console.log(res.data);
        dispatch({ type: "success", payload: res.data });
      })
      .catch((err) => {
        console.log("err");
        dispatch({ type: "fail", payload: "err" });
      });
  };
};

const store = createStore(reducer, applyMiddleware(reduxThunk));
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
// console.log(store.getState());
