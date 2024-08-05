import React, { useState } from "react";
import "../styles/common-styles.scss";
import Button from "./Button";

const ColorChangerWidget = () => {
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateColor = () => {
    setColor(inputValue);
    setInputValue("");
  };

  return (
    <div className="color-changing-widget">
      <h1 style={{ color: color }}>Change My Color</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a color"
      />
      <Button
        label="Change Color"
        onClick={updateColor}
        className="color-change-button"
      />
    </div>
  );
};

export default ColorChangerWidget;
