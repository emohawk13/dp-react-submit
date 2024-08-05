import React from "react";
import "./styles/common-styles.scss";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import ToggleView from "./components/ToggleView";
import AdjustSize from "./components/AdjustSize";
import AlignTest from "./components/AdjustAlignment";
import Clock from "./components/ClockWidget";
import ColorChangerWidget from "./components/ColorChanging";
import RGBSliderWidget from "./components/RGBSlider";
import WeatherWidget from "./components/WeatherApi";

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
      <div className="card-content">
        <AlignTest />
      </div>
      <div className="card-content">
        <Clock />
      </div>
      <div className="card-content">
        <ColorChangerWidget />
      </div>
      <div className="card-content">
        <RGBSliderWidget />
      </div>
      <div class="card-content">
        <WeatherWidget />
      </div>
      <footer className="footer">&copy; 2024 Dauhson Capps</footer>
    </div>
  );
};

export default App;
