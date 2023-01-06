import {
  DECREASE_ICE,
  INCREASE_ICE,
  RESET_ICE,
} from "../actionTypes/iceActionTypes";

const ICE_STATE = {
  numOfIce: 20,
};

const iceReducer = (state = ICE_STATE, action) => {
  switch (action.type) {
    case INCREASE_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce + action.payload,
      };
    case DECREASE_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce - action.payload,
      };
    case RESET_ICE:
      return ICE_STATE;
    default:
      return state;
  }
};

export default iceReducer;
