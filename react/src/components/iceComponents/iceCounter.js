import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  decreaseIce,
  increaseIce,
  resetIce,
} from "../../redux/actions/iceActions";
import Button from "../general/button/Button";

import styles from "./iceCounter.module.css";

const IceCounter = () => {
  const [payloadVal, setPayloadVal] = useState(0);
  console.log("ICE RENDERED");

  // useSelector hook

  // const { ice: iceState } = useSelector((state) => state); //
  // const iceState = useSelector((state) => state.ice, shallowEqual); //
  const iceState = useSelector((state) => state.ice.numOfIce); // specify the state
  // console.log(iceState);

  // useDispatch hook

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseIce(payloadVal));
  };
  const handleDecrease = () => {
    dispatch(decreaseIce(payloadVal));
  };

  const handleReset = () => {
    dispatch(resetIce());
  };

  return (
    <div className={styles.cakeContainer}>
      <h3>Ice Counter</h3>
      <div className={styles.cakeNum}>
        <p>Number of Ice:: </p>
        <span>{iceState}</span>
      </div>
      <div className={styles.inputContainer}>
        <input type="number" onChange={(e) => setPayloadVal(+e.target.value)} />
      </div>
      <div className={styles.cakeBtns}>
        <Button
          sign={"+"}
          className={styles.plusBtn}
          onClick={handleIncrease}
        />
        <Button
          sign={"-"}
          className={styles.minusBtn}
          onClick={handleDecrease}
        />
        <Button
          sign="Reset"
          className={styles.resetBtn}
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

// Old approach with connect()

// const mapStateToProps = (state) => {
//   return {
//     cakes: state.cake.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCake: () => dispatch(increaseCake()),
//     decreaseCake: () => dispatch(decreaseCake()),
//   };
// };

export default IceCounter;
