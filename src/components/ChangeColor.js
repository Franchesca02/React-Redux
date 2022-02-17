import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
import "../../src/styles.css"

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="colors">
      <input
        type="text" placeholder="Type color..." className="input"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button className="butn"
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default ChangeColor;
