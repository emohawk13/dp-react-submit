import React, { useState, useEffect } from "react";
import "../styles/common-styles.scss";
import Button from "./Button";

const Clock = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let timer;
    if (isMounted) {
      timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isMounted]);

  const toggleMount = () => {
    setIsMounted(!isMounted);
  };

  return (
    <div className="clock-widget">
      <Button
        label={isMounted ? "Unmount Clock" : "Mount Clock"}
        onClick={toggleMount}
        className="clock-toggle-button"
      />
      {isMounted && <div className="clock-display">{time}</div>}
    </div>
  );
};

export default Clock;
