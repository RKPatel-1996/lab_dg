// src/components/Navbar.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active styling
import "./Navbar.css";

function Navbar() {
  // 1. State to manage if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        DG'S LAB
      </NavLink>

      {/* 2. This is the new hamburger menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* 3. The 'active' class is added here when the menu is open */}
      <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
        <li>
          {/* 4. Added onClick to close menu after navigation */}
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/research" onClick={toggleMenu}>
            Our Research
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" onClick={toggleMenu}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/publications" onClick={toggleMenu}>
            Publications
          </NavLink>
        </li>
        <li>
          <NavLink to="/media" onClick={toggleMenu}>
            Published Media
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" onClick={toggleMenu}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
