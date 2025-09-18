// src/pages/ResearchPage.jsx

import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import "./ResearchPage.css"; // We'll create this CSS file next

function ResearchPage() {
  return (
    <div>
      <Navbar />
      <main className="research-content">
        <div className="intro-text">
          <h1>Our Research</h1>
          <p>
            Our research is highly interdisciplinary, blending classical
            microbiology with cutting-edge computational biology to address
            critical challenges in medicine, agriculture, and environmental
            science.
          </p>
        </div>

        {/* We will add the research sections here */}

        <div className="research-grid">
          <section className="research-card">
            <h2>🧬 Computational Biology & Drug Discovery</h2>
            <p>
              We employ a rigorous computational workflow to screen, identify,
              and validate potential drug candidates, accelerating the discovery
              of new therapeutic agents.
            </p>
            <h3>Key Activities:</h3>
            <ul>
              <li>Molecular Docking & Dynamics (MD) Simulations</li>
              <li>Novel Inhibitor Discovery (e.g., MurG, SdiA)</li>
              <li>Drug Repurposing of Natural Compounds</li>
              <li>Integrated Bioinformatics for Target Identification</li>
            </ul>
          </section>

          <section className="research-card">
            <h2>🦠 Microbial Pathogenesis & AMR</h2>
            <p>
              Addressing the urgent global health threat of Antimicrobial
              Resistance (AMR), we investigate the mechanisms of bacterial
              communication and resistance.
            </p>
            <h3>Key Activities:</h3>
            <ul>
              <li>Quorum Sensing (QS) Inhibition</li>
              <li>AMR Surveillance from a "One Health" Perspective</li>
              <li>Fundamental Pathogen Biology Studies</li>
              <li>Natural Antifungal Agent Discovery</li>
            </ul>
          </section>

          <section className="research-card">
            <h2>🌱 Plant-Microbe Interactions & Environment</h2>
            <p>
              This theme focuses on harnessing beneficial microbes for
              sustainable agriculture and environmental remediation, aiming to
              reduce reliance on chemical inputs.
            </p>
            <h3>Key Activities:</h3>
            <ul>
              <li>Plant Growth-Promoting Rhizobacteria (PGPR)</li>
              <li>Biocontrol & Mycoparasitism Optimization</li>
              <li>Pesticide Degradation & Heavy Metal Biosorption</li>
              <li>Valuable Microbial Biopolymer Production (PHAs)</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ResearchPage;
