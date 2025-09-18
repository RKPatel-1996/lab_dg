import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"; // Import icons
import "./ContactPage.css";

function ContactPage() {
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
                <strong>Physical Address</strong>
                <p>
                  Dr. Dweipayan Goswami, Assistant Professor,
                  <br />
                  Department of Microbiology and Biotechnology,
                  <br />
                  School of Sciences, Gujarat University,
                  <br />
                  Ahmedabad, Gujarat 380009, India
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
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <strong>Lab Phone</strong>
                <p>
                  <a href="tel:+919825222759">+91 9825222759</a>
                </p>
              </div>
            </div>

            <h2 className="online-header">Find Us Online</h2>
            <div className="social-links-contact">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> X (Twitter)
              </a>
              {/* Add other links like ResearchGate here */}
            </div>
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
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
