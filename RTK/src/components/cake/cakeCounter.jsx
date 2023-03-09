import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCake, increaseCake } from "../../rtk/slice/cakeSlice";

const CakeCounter = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes == {numOfCakes}</h2>
      <button onClick={() => dispatch(increaseCake(10))}>Increase</button>
      <button onClick={() => dispatch(decreaseCake(10))}>Decrease</button>
    </div>
  );
};

export default CakeCounter;
