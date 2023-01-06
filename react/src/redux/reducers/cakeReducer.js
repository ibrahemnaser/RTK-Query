import {
  DECREASE_CAKE,
  INCREASE_CAKE,
  RESET_CAKE,
} from "../actionTypes/cakeActionTypes";

const CAKE_STATE = {
  numOfCakes: 50,
};

const cakeReducer = (state = CAKE_STATE, action) => {
  switch (action.type) {
    case INCREASE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    case DECREASE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESET_CAKE:
      return CAKE_STATE;
    default:
      return state;
  }
};

export default cakeReducer;
