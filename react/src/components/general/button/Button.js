import React, { memo } from "react";

const Button = ({ sign, className, onClick }) => {
  console.log("BUTTON RENDERD");
  return (
    <button className={className} onClick={onClick}>
      {sign}
    </button>
  );
};

export default memo(Button);
