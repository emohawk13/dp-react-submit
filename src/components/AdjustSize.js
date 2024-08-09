import React, { useState } from "react";
import Button from "./Button";
import "../styles/common-styles.scss";

const AdjustSize = () => {
  const [fontSize, setFontSize] = useState(16);
  const minSize = 0;
  const maxSize = 100;

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 5, maxSize));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 5, minSize));
  };

  return (
    <div className="font-size-adjuster">
      <div className="adjustable-text-container">
        <p className="adjustable-text" style={{ fontSize: `${fontSize}px` }}>
          Adjust my size!
        </p>
      </div>
      <div className="button-container">
        <Button
          label="Grow"
          onClick={increaseFontSize}
          className="button-adjuster"
        />
        <Button
          label="Shrink"
          onClick={decreaseFontSize}
          className="button-adjuster"
        />
      </div>
    </div>
  );
};

export default AdjustSize;
