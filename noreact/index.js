/**
 *
 * 1)- create store
 *
 *
 * 2)- create reducer
 *
 *
 * 3)- subscribe a callback to any change in the store
 *
 *
 * 4)- unsbscribe any change to the store
 *
 *
 */

// 1)- create store
const { createStore } = require("redux");

// 2)- create reducer
const CAKE_STATE = {
  numOfCake: 100,
};

const cakeReducer = (state = CAKE_STATE, action) => {
  switch (action.type) {
    case "INCREASE_CAKE":
      return {
        ...state,
        numOfCake: state.numOfCake + 1,
      };
    case "DECREASE_CAKE":
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

const store = createStore(cakeReducer);

console.log("INITIAL", store.getState());

// 3)- subscribe a callback to any change in the store
const unsubscribe = store.subscribe(() => {
  console.log("UPDATE", store.getState());
});

store.dispatch({ type: "DECREASE_CAKE" });
store.dispatch({ type: "DECREASE_CAKE" });
store.dispatch({ type: "DECREASE_CAKE" });
store.dispatch({ type: "INCREASE_CAKE" });
console.log(store.getState());
console.log(store.getState());
console.log(store.getState());

// 4)- unsbscribe any change to the store
unsubscribe();
store.dispatch({ type: "DECREASE_CAKE" });
store.dispatch({ type: "INCREASE_CAKE" });
store.dispatch({ type: "INCREASE_CAKE" });
store.dispatch({ type: "INCREASE_CAKE" });
store.dispatch({ type: "DECREASE_CAKE" });
console.log(store.getState());
console.log(store.getState());
console.log(store.getState());
