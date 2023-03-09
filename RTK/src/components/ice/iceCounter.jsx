import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseIce, decreaseIce } from "../../rtk/slice/iceSlice";

const IceCounter = () => {
  const numOfIce = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice == {numOfIce}</h2>
      <button onClick={() => dispatch(increaseIce(1))}>Increase</button>
      <button onClick={() => dispatch(decreaseIce(1))}>Decrease</button>
    </div>
  );
};

export default IceCounter;
