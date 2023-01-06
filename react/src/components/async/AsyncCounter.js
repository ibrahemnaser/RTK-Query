import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncIncreaseIce,
  decreaseIce,
  increaseIce,
} from "../../redux/actions/iceActions";
import Button from "../general/button/Button";

import styles from "./AsyncCounter.module.css";

const AsyncCounter = () => {
  const [payloadVal, setPayloadVal] = useState(0);
  console.log("ASYNC ICE RENDERED");

  const iceState = useSelector((state) => state.ice.numOfIce);

  const dispatch = useDispatch();

  const handleAsyncIncrease = () => {
    dispatch(asyncIncreaseIce());
  };
  const handleDecrease = () => {
    dispatch(decreaseIce(payloadVal));
  };
  const handleIncrease = () => {
    dispatch(increaseIce(payloadVal));
  };

  return (
    <div className={styles.cakeContainer}>
      <h3>Async Ice Counter</h3>
      <div className={styles.cakeNum}>
        <p>Number of Ice:: </p>
        <span>{iceState}</span>
      </div>
      <div className={styles.inputContainer}>
        <input type="number" onChange={(e) => setPayloadVal(+e.target.value)} />
      </div>
      <div className={styles.cakeBtns}>
        <Button
          sign={"Async +"}
          className={styles.plusBtn}
          onClick={handleAsyncIncrease}
        />
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
        {/* <Button
          sign="Reset"
          className={styles.resetBtn}
          onClick={handleReset}
        /> */}
      </div>
    </div>
  );
};

export default AsyncCounter;
