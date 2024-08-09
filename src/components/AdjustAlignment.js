import React, { useState } from "react";
import "../styles/common-styles.scss";
import Button from "./Button";

const AlignTest = () => {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="text-alignment-widget">
      <div className={`text-content ${alignment}`}>Alignment</div>
      <div className="alignment-buttons">
        <Button
          label="Left Align"
          onClick={() => setAlignment("left")}
          className="align-button"
        />
        <Button
          label="Center Align"
          onClick={() => setAlignment("center")}
          className="align-button"
        />
        <Button
          label="Right Align"
          onClick={() => setAlignment("right")}
          className="align-button"
        />
      </div>
    </div>
  );
};

export default AlignTest;
