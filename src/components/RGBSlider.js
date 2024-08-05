import React, { useState } from "react";
import "../styles/common-styles.scss";

const RGBSliderWidget = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const handleSliderChange = (setColor) => (e) => {
    setColor(e.target.value);
  };

  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="rgb-slider-widget">
      <div className="color-box" style={{ backgroundColor: rgbColor }}>
        {rgbColor}
      </div>
      <div className="sliders">
        <div className="slider">
          <label>R: {r}</label>
          <input
            type="range"
            min="0"
            max="255"
            value={r}
            onChange={handleSliderChange(setR)}
          />
        </div>
        <div className="slider">
          <label>G: {g}</label>
          <input
            type="range"
            min="0"
            max="255"
            value={g}
            onChange={handleSliderChange(setG)}
          />
        </div>
        <div className="slider">
          <label>B: {b}</label>
          <input
            type="range"
            min="0"
            max="255"
            value={b}
            onChange={handleSliderChange(setB)}
          />
        </div>
      </div>
    </div>
  );
};

export default RGBSliderWidget;
