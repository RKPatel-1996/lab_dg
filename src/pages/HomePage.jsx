import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import ScrollButtons from "../components/ScrollButtons";
import "./HomePage.css";

// --- Data for the new logo carousel ---
// Instructions:
// 1. You've already provided the logos for the first 3 items.
// 2. For the others, create a folder named "logos" inside your "public" directory.
// 3. Find colored SVG or PNG logos for ORCID, GitHub, etc., and save them in "public/logos/".
//    For example: public/logos/github.svg, public/logos/youtube.svg
const socialLinks = [
  {
    name: "Gujarat University",
    logo: "profile-photos/gu_logo.png",
    url: "https://www.gujaratuniversity.ac.in",
  },
  {
    name: "MIBIT",
    logo: "profile-photos/mibit_logo.png",
    url: "https://www.gujaratuniversity.ac.in/details/23",
  },
  {
    name: "Personal Website",
    logo: "profile-photos/DG_logo.png",
    url: "https://dweipayang.github.io/Resume-Webpage",
  },
  {
    name: "ORCID",
    logo: "logos/orcid.svg", // Add this logo to public/logos/
    url: "https://orcid.org/0000-0003-0165-0294",
  },
  {
    name: "GitHub",
    logo: "logos/github.svg", // Add this logo to public/logos/
    url: "https://github.com/DweipayanG",
  },
  {
    name: "ResearchGate",
    logo: "logos/researchgate.svg", // Add this logo to public/logos/
    url: "https://www.researchgate.net/profile/Dweipayan-Goswami",
  },
  {
    name: "Google Scholar",
    logo: "logos/google_scholar.svg", // Add this logo to public/logos/
    url: "https://scholar.google.com/citations?user=dLpNTzsAAAAJ&hl",
  },
  {
    name: "YouTube",
    logo: "logos/youtube.svg", // Add this logo to public/logos/
    url: "https://www.youtube.com/c/learnatease",
  },
  {
    name: "twitter",
    logo: "logos/twitter.png", // Add this logo to public/logos/
    url: "https://x.com/DweipayanG",
  },
  {
    name: "instagram",
    logo: "logos/insta.svg", // Add this logo to public/logos/
    url: "https://www.instagram.com/dweipayan_goswami",
  },
  {
    name: "LinkedIn",
    logo: "logos/linkedIn.png", // Add this logo to public/logos/
    url: "https://www.youtube.com/c/learnatease",
  },
];
// -----------------------------------------

function HomePage() {
  const recentPublication = {
    title:
      "MurG as a potential target of quercetin in Staphylococcus aureus...",
    authors: "Dweipayan Goswami, Jignesh Prajapati, Milan Dabhi...",
    journal: "Scientific Reports, 2025",
    url: "/publications",
  };

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
                  <span>Sep 2025:</span> Just Chill Still No News !!
                </li>
                <li>
                  <span>Aug 2025:</span> Chill No News.
                </li>
                <li>
                  <span>Jun 2025:</span> Chill No News!
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
                <span>Read More →</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. NEW: Affiliations & Links Section */}
        <section className="affiliations-section">
          <div className="container">
            <h2>Digital Space</h2>
            <div className="logo-carousel">
              <div className="logo-track">
                {/* We map the array twice for a seamless loop */}
                {[...socialLinks, ...socialLinks].map((link, index) => (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${link.name}-${index}`}
                    className="logo-item"
                    title={link.name} /* Tooltip for accessibility */
                  >
                    <img src={link.logo} alt={`${link.name} logo`} />
                  </a>
                ))}
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

export default HomePage;
