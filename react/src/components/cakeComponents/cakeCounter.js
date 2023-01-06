import React, { useState } from "react";
import { connect } from "react-redux";
import {
  decreaseCake,
  increaseCake,
  resetCake,
} from "../../redux/actions/cakeActions";
import Button from "../general/button/Button";

import styles from "./cakeCounter.module.css";

const CakeCounter = ({ cakes, increaseCake, decreaseCake, resetCake }) => {
  const [payloadVal, setPayloadVal] = useState(0);
  console.log("CAKE RENDERED");

  const handleIncrease = () => {
    increaseCake(payloadVal);
  };
  const handleDecrease = () => {
    decreaseCake(payloadVal);
  };
  const handleReset = () => {
    resetCake();
  };
  return (
    <div className={styles.cakeContainer}>
      <h3>Cake Counter</h3>
      <div className={styles.cakeNum}>
        <p>Number of Cakes:: </p>
        <span>{cakes}</span>
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

const mapStateToProps = (state) => {
  return {
    cakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCake: (num) => dispatch(increaseCake(num)),
    decreaseCake: (num) => dispatch(decreaseCake(num)),
    resetCake: () => dispatch(resetCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeCounter);
