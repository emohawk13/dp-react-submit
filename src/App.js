import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import ParticleBackground from "./components/Particles";
import "./styles/common-styles.scss";

const App = () => {
  return (
    <Router>
      <ParticleBackground />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
