import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: About/Brand */}
        <div className="footer-column">
          <h4>DG'S LAB</h4>
          <p>
            Advancing Biotechnology through Computational & Molecular
            Approaches.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
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
        </div>

        {/* Column 3: Contact & Social */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            Gujarat University,
            <br />
            Ahmedabad, Gujarat 380009, India
          </p>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} DG'S LAB. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
