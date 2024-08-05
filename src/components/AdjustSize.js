import React, { useState } from "react";
import Button from "./Button";
import "../styles/common-styles.scss";

const AdjustSize = () => {
  const [fontSize, setFontSize] = useState(16);
  const minSize = 0;
  const maxSize = 100;
  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 2, maxSize));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, minSize));
  };

  return (
    <div className="font-size-adjuster">
      <p className="adjustable-text" style={{ fontSize: `${fontSize}px` }}>
        Adjust my size!
      </p>
      <div className="button-container">
        <Button label="Grow" onClick={increaseFontSize} className="button-1" />
        <Button
          label="Shrink"
          onClick={decreaseFontSize}
          className="button-2"
        />
      </div>
    </div>
  );
};

export default AdjustSize;
