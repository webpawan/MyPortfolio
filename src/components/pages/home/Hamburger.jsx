import React from "react";
import './hamburger.css'

const HamburgerIcon = ({ isOpen, toggle }) => {
  return (
    <div className="hamburger-icon" onClick={toggle}>
      <div className={`hamburger-line ${isOpen ? "open" : ""}`}></div>
      <div className={`hamburger-line ${isOpen ? "open" : ""}`}></div>
      <div className={`hamburger-line ${isOpen ? "open" : ""}`}></div>
    </div>
  );
};

export default HamburgerIcon;
