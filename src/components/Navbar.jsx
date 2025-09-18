// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css"; // We will create this file next for styling

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        DG'S LAB
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/research">Our Research</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        <li>
          <Link to="/media">Published Media</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
