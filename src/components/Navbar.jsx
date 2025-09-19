// src/components/Navbar.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ThemeSwitcher from "./ThemeSwitcher"; // 👈 1. Import the theme switcher

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // A helper to close the menu, used by NavLinks
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        DG'S LAB
      </NavLink>

      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={handleNavClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/research" onClick={handleNavClick}>
            Our Research
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" onClick={handleNavClick}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/publications" onClick={handleNavClick}>
            Publications
          </NavLink>
        </li>
        <li>
          <NavLink to="/media" onClick={handleNavClick}>
            Published Media
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" onClick={handleNavClick}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleNavClick}>
            Contact
          </NavLink>
        </li>
        {/* 👇 2. Add the ThemeSwitcher component in its own list item */}
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
