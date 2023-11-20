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


  return (
    <div className="nav-container">
      <div className="nav-logo">
        SociWave
      </div>
      <div className="nav-links">
        <ul id={menuOpen ? "sidemenu" : "sidemenu-closed"} style={sidemenuStyle}>
        <i class="fa-solid fa-xmark fast" onClick={closeMenu}></i>
        <div className="innerdiv">
          <li><a href="#header">Services</a></li>
          <li><a href="#about">About Us</a></li>          
          <li><a href="#contact">Contact</a></li>
          <li><a href="#clients">FAQ</a></li>
          <li><a href="#services">Terms</a></li>
          <button onClick={logout}  >Log Out</button>
        </div>
         
        </ul>
        <i class="fa-solid fa-bars fast" onClick={openMenu}></i>

      </div>

      
    </div>
  );
}