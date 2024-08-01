import React from "react";
import "../styles/common-styles.scss";

const Button = ({ text }) => (
  <div className="button-container">
    <button className="sidebar-button">{text}</button>
  </div>
);

const Logo = ({ className }) => <div className={className}>LOGO</div>;

const Sidebar = () => (
  <div className="sidebar">
    <Logo className="logo" />
    <Button text="BUTTON" />
    <Button text="BUTTON" />
    <Button text="BUTTON" />
    <Button text="BUTTON" />
    <Button text="BUTTON" />
    <Logo className="logo-bottom" />
  </div>
);

export default Sidebar;
