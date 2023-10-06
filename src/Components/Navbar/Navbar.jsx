import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <span>SociWave</span>{" "}
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#a">Services</a></li>
          <li><a href="#a">About Us</a></li>
          <li><a href="#a">FAQ</a></li>
          <li><a href="#a">Terms</a></li>
        </ul>
      </div>
    </div>
  );
}
