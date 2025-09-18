import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Assuming you have a Footer component
import { FaArrowRight } from "react-icons/fa";
import "./HomePage.css";

function HomePage() {
  // --- You can update this content easily ---
  const recentPublication = {
    title:
      "MurG as a potential target of quercetin in Staphylococcus aureus...",
    authors: "Dweipayan Goswami, Jignesh Prajapati, Milan Dabhi...",
    journal: "Scientific Reports, 2025",
    url: "/publications", // Link to your publications page
  };

  const pi = {
    name: "Dr. Dweipayan Goswami",
    photo: "/profile-photos/head.jpg", // Make sure this path is correct
    bioSnippet:
      "Dr. Goswami leads the lab with a focus on computational biology and bioinformatics, aiming to unravel complex biological systems through data-driven approaches.",
  };
  // -----------------------------------------

  return (
    <div className="homepage">
      <Navbar />

      {/* 1. Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to DG'S LAB</h1>
          <p className="hero-tagline">
            Advancing Biotechnology through Computational & Molecular Approaches
          </p>
          <Link to="/research" className="cta-button">
            Explore Our Research <FaArrowRight className="button-icon" />
          </Link>
        </div>
      </header>

      <main>
        {/* 2. Our Mission Section */}
        <section className="mission-section">
          <div className="container">
            <h2>Our Mission</h2>
            <p className="mission-text">
              At DG'S LAB, we are dedicated to bridging the gap between
              computational analysis and wet-lab experimentation. Our research
              focuses on identifying novel therapeutic targets, understanding
              molecular interactions, and developing new biotechnological tools
              to address critical challenges in health and science.
            </p>
          </div>
        </section>

        {/* 3. Latest Updates Section */}
        <section className="updates-section">
          <div className="container updates-grid">
            <div className="latest-news">
              <h3>Latest News</h3>
              <ul>
                <li>
                  <span>Sep 2025:</span> Lab receives a new grant for cancer
                  research.
                </li>
                <li>
                  <span>Aug 2025:</span> Dr. Patel presents at the International
                  Bioinformatics Conference.
                </li>
                <li>
                  <span>Jun 2025:</span> Welcome to our new summer interns!
                </li>
              </ul>
            </div>
            <div className="recent-publication">
              <h3>Recent Publication</h3>
              <a href={recentPublication.url} className="publication-card">
                <h4>{recentPublication.title}</h4>
                <p className="pub-authors">{recentPublication.authors}</p>
                <p className="pub-journal">
                  <em>{recentPublication.journal}</em>
                </p>
                <span>Read More &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. Meet the PI Section */}
        <section className="pi-section">
          <div className="container pi-grid">
            <img
              src={pi.photo}
              alt={`Photo of ${pi.name}`}
              className="pi-photo"
            />
            <div className="pi-info">
              <h3>Meet the Principal Investigator</h3>
              <h4>{pi.name}</h4>
              <p>{pi.bioSnippet}</p>
              <Link to="/team" className="text-link">
                Meet the whole team
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Join Us Section */}
        <section className="join-section">
          <div className="container">
            <h2>Join Our Team</h2>
            <p>
              We are always looking for passionate and motivated students and
              researchers. If you are interested in our work, please get in
              touch.
            </p>
            <Link to="/contact" className="cta-button-secondary">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
