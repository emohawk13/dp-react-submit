import React, { useState } from "react";
import Button from "./utilityComponents/Button";
import "../styles/common-styles.scss";

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const increase = () => setCurrentCount(currentCount + 1);
  const increase_by_ten = () => setCurrentCount(currentCount + 10);

  const decrease = () => {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
  };

  const decrease_by_ten = () => {
    if (currentCount > 9) {
      setCurrentCount(currentCount - 10);
    }
  };

  return (
    <div className="counter">
      <h3>Current Count: {currentCount}</h3>
      <div className="button-container">
        <Button
          label="Increase Count"
          onClick={increase}
          className="inc-button"
        />
        <Button
          label="Increase Count by Ten"
          onClick={increase_by_ten}
          className="inc-button"
        />
        <Button
          label="Decrease Count"
          onClick={decrease}
          disabled={currentCount === 0}
          className="dec-button"
        />
        <Button
          label="Decrease Count by Ten"
          onClick={decrease_by_ten}
          disabled={currentCount < 10}
          className="dec-button"
        />
      </div>
    </div>
  );
};

export default Counter;
