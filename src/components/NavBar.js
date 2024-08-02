import React from "react";
import "../styles/common-styles.scss";

const NavBar = () => (
  <div className="navigation">
    <div className="company-logo">
      <h1>Some Software Company</h1>
    </div>
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
);

export default NavBar;
