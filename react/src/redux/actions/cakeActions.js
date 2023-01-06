// action creator

import {
  INCREASE_CAKE,
  DECREASE_CAKE,
  RESET_CAKE,
} from "../actionTypes/cakeActionTypes";

export const increaseCake = (num) => {
  return {
    type: INCREASE_CAKE,
    payload: num,
  };
};
export const decreaseCake = (num) => {
  return {
    type: DECREASE_CAKE,
    payload: num,
  };
};

export const resetCake = () => {
  return {
    type: RESET_CAKE,
  };
};
