import React, { useState } from "react";
import "../styles/common-styles.scss";
import Button from "./utilityComponents/Button";

const ToggleView = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="toggle-widget">
      {isVisible && <h2 className="toggle-text">Hide Me</h2>}
      <Button
        label={isVisible ? "Hide" : "Show"}
        onClick={handleToggle}
        className="toggle-button"
      />
    </div>
  );
};

ToggleView.propTypes = {};

export default ToggleView;
