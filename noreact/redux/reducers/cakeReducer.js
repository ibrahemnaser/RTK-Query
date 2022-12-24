const { BUYCAKE, RESTORECAKE } = require("../actionTypes/cakeActionTypes");

const INITIAL_STATE = {
  numOfCakes: 100,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUYCAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESTORECAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

exports.reducer = reducer;
