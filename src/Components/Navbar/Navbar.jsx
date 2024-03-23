import {React,useState} from "react";
import "./Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const sidemenuStyle = {
        right: menuOpen ? '0px' : '-350px'
    };

    const logout = () => {
      localStorage.clear();
      window.location.href = "/";
    };

    const status = localStorage.getItem("loginStatus");

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <a href="/">SociWave</a>
      </div>
      <div className="nav-links">
        <ul id={menuOpen ? "sidemenu" : "sidemenu-closed"} style={sidemenuStyle}>
        <i className="fa-solid fa-xmark fast" onClick={closeMenu}></i>
        <div className="innerdiv">
          <li><a href="/about">About Us</a></li>    
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms</a></li>
          <button onClick={logout} className={status ? "show" : "hide"}  >Log Out</button>
        </div>
         
        </ul>
        <i className="fa-solid fa-bars fast" onClick={openMenu}></i>

      </div>

      
    </div>
  );
}