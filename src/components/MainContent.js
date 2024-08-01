import React from "react";
import "../styles/common-styles.scss";

const MainContent = () => (
  <div className="main-page">
    <div className="main-content">
      <div className="image">IMAGE</div>
      <div className="header">HEADER</div>
      <div className="subheader">SUBHEADER</div>
      <div className="content-block main-content-block">MAIN CONTENT</div>
      <div className="content-container">
        <div className="content-section">
          <div className="content">MAIN CONTENT</div>
          <div className="image-content">IMAGE</div>
        </div>
        <div className="content-section">
          <div className="image-content">IMAGE</div>
          <div className="content">MAIN CONTENT</div>
        </div>
      </div>
      <div className="content-block main-content-block">MAIN CONTENT</div>
      <div className="button">BUTTON</div>
    </div>
    <div className="footer">
      <div className="social-media-icons">SOCIAL MEDIA ICONS</div>
      <div className="copyright">COPYRIGHT</div>
    </div>
    ;
  </div>
);

export default MainContent;
