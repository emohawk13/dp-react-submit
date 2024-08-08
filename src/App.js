import React, { useState } from "react";
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
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [activeComponent, setActiveComponent] = useState("Counter");

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login setUser={setUser} />;
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case "Counter":
        return <Counter />;
      case "Greeting":
        return <Greeting />;
      case "ToggleView":
        return <ToggleView />;
      case "AdjustSize":
        return <AdjustSize />;
      case "AlignTest":
        return <AlignTest />;
      case "Clock":
        return <Clock />;
      case "ColorChangerWidget":
        return <ColorChangerWidget />;
      case "RGBSliderWidget":
        return <RGBSliderWidget />;
      case "WeatherWidget":
        return <WeatherWidget />;
      default:
        return <Counter />;
    }
  };

  return (
    <div className="main-page">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActiveComponent("Counter")}>Counter</li>
          <li onClick={() => setActiveComponent("Greeting")}>Greeting</li>
          <li onClick={() => setActiveComponent("ToggleView")}>Toggle View</li>
          <li onClick={() => setActiveComponent("AdjustSize")}>Adjust Size</li>
          <li onClick={() => setActiveComponent("AlignTest")}>Align Test</li>
          <li onClick={() => setActiveComponent("Clock")}>Clock</li>
          <li onClick={() => setActiveComponent("ColorChangerWidget")}>
            Color Changer
          </li>
          <li onClick={() => setActiveComponent("RGBSliderWidget")}>
            RGB Slider
          </li>
          <li onClick={() => setActiveComponent("WeatherWidget")}>Weather</li>
          <li onClick={handleLogout} className="logout">
            Logout
          </li>
        </ul>
      </nav>
      <div className="widgets">
        <div className="card-content">{renderComponent()}</div>
      </div>
      <footer className="footer">&copy; 2024 Dauhson Capps</footer>
    </div>
  );
};

export default App;
