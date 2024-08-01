import React from "react";
import "./styles/common-styles.scss";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
