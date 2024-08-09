import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const changeCount = (amount) =>
    setCurrentCount((prevCount) => Math.max(0, prevCount + amount));

  return (
    <div className="counter">
      <h3>Current Count: {currentCount}</h3>
      <div className="button-container">
        <Button
          label="Increase Count"
          onClick={() => changeCount(1)}
          className="inc-button"
        />
        <Button
          label="Increase Count by Ten"
          onClick={() => changeCount(10)}
          className="inc-button"
        />
        <Button
          label="Decrease Count"
          onClick={() => changeCount(-1)}
          disabled={currentCount === 0}
          className="dec-button"
        />
        <Button
          label="Decrease Count by Ten"
          onClick={() => changeCount(-10)}
          disabled={currentCount < 10}
          className="dec-button"
        />
      </div>
    </div>
  );
};

export default Counter;
