const { BUYCAKE, RESTORECAKE } = require("../actionTypes/cakeActionTypes");

const buyCake = (amount = 0) => {
  return {
    type: BUYCAKE,
    payload: amount,
  };
};
const restorCake = (amount = 0) => {
  return {
    type: RESTORECAKE,
    payload: amount,
  };
};

module.exports = {
  buyCake,
  restorCake,
};
