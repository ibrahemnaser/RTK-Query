import {
  DECREASE_ICE,
  INCREASE_ICE,
  RESET_ICE,
} from "../actionTypes/iceActionTypes";

export const increaseIce = (num) => {
  return {
    type: INCREASE_ICE,
    payload: num,
  };
};
export const decreaseIce = (num) => {
  return {
    type: DECREASE_ICE,
    payload: num,
  };
};
export const resetIce = () => {
  return {
    type: RESET_ICE,
  };
};

export const asyncIncreaseIce = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increaseIce(1));
    }, 2000);
  };
};
