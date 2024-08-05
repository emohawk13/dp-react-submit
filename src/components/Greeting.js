import React, { useState } from "react";
import Button from "./Button";
import "../styles/common-styles.scss";

const Greeting = () => {
  const greet = "Hi there!";
  const [greeting, setGreeting] = useState(greet);

  const toggleGreet = () => {
    setGreeting((prevGreeting) => (prevGreeting === greet ? "Bye!" : greet));
  };

  return (
    <div className="greeting-container">
      <h1>{greeting}</h1>
      <Button
        label="Click to Greet"
        onClick={toggleGreet}
        className="greeting-button"
      />
    </div>
  );
};

export default Greeting;
