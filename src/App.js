import React from "react";
import "./styles/common-styles.scss";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import ToggleView from "./components/ToggleView";
import AdjustSize from "./components/AdjustSize";

const App = () => {
  return (
    <div className="widgets">
      <div className="card-content">
        <Counter />
      </div>
      <div className="card-content">
        <Greeting />
      </div>
      <div className="card-content">
        <ToggleView />
      </div>
      <div className="card-content">
        <AdjustSize />
      </div>
      <footer className="footer">&copy; 2024 Dauhson Capps</footer>
    </div>
  );
};

export default App;
