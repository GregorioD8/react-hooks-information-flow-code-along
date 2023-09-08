import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
  }

  function Child({ onChangeColor }) {
    console.log(onChangeColor);
    return (
      <div
        onClick={onChangeColor}
        className="child"
        style={{ backgroundColor: "#FFF" }}
      />
    );
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
