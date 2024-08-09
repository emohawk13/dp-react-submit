import React, { useState } from "react";
import "../styles/common-styles.scss";
import Button from "./Button";

const ColorChangerWidget = () => {
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const formatToCamelCase = (str) => {
    return str
      .split(" ")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  };

  const isValidCssColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== "";
  };

  const updateColor = () => {
    const formattedColor = formatToCamelCase(inputValue.trim());

    if (isValidCssColor(formattedColor)) {
      setColor(formattedColor);
    } else {
      alert("Invalid color name. Please enter a valid CSS color.");
    }

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
