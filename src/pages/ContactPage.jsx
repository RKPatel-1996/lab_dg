import React from "react";
// The Link component is no longer needed on this page, but we'll leave it in case you add other links later.
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollButtons from "../components/ScrollButtons";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "./ContactPage.css";

function ContactPage() {
  // The 'pi' object has been removed as it's no longer needed.

  return (
    <div>
      <Navbar />
      <main className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Please feel free to reach out with any
          questions or collaboration inquiries.
        </p>

        <div className="contact-container">
          {/* Left Side: Contact Details */}
          <div className="contact-details">
            <h2>Contact Details</h2>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <strong>Address</strong>
                <p>
                  Dr. Dweipayan Goswami,
                  <br />
                  Assistant Professor,
                  <br />
                  Department of Microbiology and Biotechnology,
                  <br />
                  University School of Sciences,
                  <br />
                  Gujarat University, Ahmedabad,
                  <br />
                  Gujarat 380009, India
                </p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <strong>Email (Principal Investigator)</strong>
                <p>
                  <a href="mailto:dweipayan.goswami@gujaratuniversity.ac.in">
                    dweipayan.goswami@gujaratuniversity.ac.in
                  </a>
                </p>
              </div>
            </div>

            <h2 className="online-header">Affiliation</h2>
            <div className="social-links-contact"></div>
          </div>

          {/* Right Side: Embedded Map */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d292.4276687997923!2d72.5437907624103!3d23.03749405552001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDepartment%20of%20Microbiology%20and%20Biotechnology%20Gujarat%20university!5e0!3m2!1sen!2sin!4v1758113397831!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* === CORRECTED SECTION WITH DEPARTMENT AND UNIVERSITY CARDS === */}
        <section className="combined-section">
          <div className="container">
            <div className="combined-grid">
              {/* --- Card 1: Department of Microbiology and Biotechnology --- */}
              <div className="column department-column">
                <div className="column-content">
                  <a
                    href="https://www.gujaratuniversity.ac.in/details/23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="column-photo-link"
                  >
                    <img
                      src="profile-photos/mibit_logo.png"
                      alt="Department of Microbiology and Biotechnology Logo"
                      className="column-photo logo"
                    />
                  </a>
                  <h4>Dept. of Microbiology and Biotechnology</h4>
                  <p>
                    Our Department is a dynamic and flexible organization with
                    local focus. It was established in the year 1976 in
                    University School of Sciences at Gujarat University
                  </p>
                  <div className="social-media-section">
                    <h5>Connect with the Department</h5>
                    <div className="social-links-grid">
                      {/* Placeholder links for the department */}
                      <a
                        href="https://in.linkedin.com/school/gujarat-university"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Department LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://facebook.com/gujaratuniversityofficialpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Department Facebook"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://instagram.com/gujarat_university"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Department Instagram"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Vertical Divider --- */}
              <div className="vertical-divider"></div>

              {/* --- Card 2: Gujarat University --- */}
              <div className="column university-column">
                <div className="column-content">
                  <a
                    href="https://www.gujaratuniversity.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="column-photo-link"
                  >
                    <img
                      src="profile-photos/gu_logo.png"
                      alt="Gujarat University Logo"
                      className="column-photo logo"
                    />
                  </a>
                  <h3>Our University</h3>
                  <h4>Gujarat University</h4>
                  <p>
                    Established in 1949 under the Gujarat University Act, the
                    Gujarat University is largest and oldest university of the
                    Gujarat state.
                  </p>
                  <div className="social-media-section">
                    <h5>Connect with the University</h5>
                    <div className="social-links-grid">
                      <a
                        href="https://in.linkedin.com/school/gujarat-university"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://facebook.com/gujaratuniversityofficialpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://instagram.com/gujarat_university"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="https://youtube.com/@GujaratUniversityIndia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <FaYoutube />
                      </a>
                      <a
                        href="https://x.com/gujuni1949"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollButtons />
    </div>
  );
}

export default ContactPage;
