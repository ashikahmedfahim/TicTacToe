import React from "react";
import "./css/square.css";

const Square = (props) => {

  return (
    <button
      onClick={() => {
        props.writeValue(props.id % 9);
        props.updateCounter();
      }}
    >
      {props.value}
    </button>
  );
};

export default Square;
