// src/pages/PublicationsPage.jsx
import React, { useState, useMemo } from "react";
import Papa from "papaparse";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import PublicationCard from "../components/PublicationCard.jsx";
import { usePublicationData } from "../hooks/usePublicationData.js";
import { allMembers } from "../data/members.js";
import "./PublicationsPage.css";

// --- FIX #1: IMPORTANT ---
// Replace this placeholder with the PI's actual ORCID iD.
const PI_ORCID = "0000-0003-0165-0294";
const PI_NAME = "Dweipayan Goswami";

function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByPI, setFilterByPI] = useState(true);

  const orcidsToFetch = useMemo(() => {
    if (filterByPI) {
      return [PI_ORCID];
    } else {
      return allMembers
        .filter((member) => member.status === "member" && member.orcid)
        .map((member) => member.orcid.split("/").pop());
    }
  }, [filterByPI]);

  const { publications, loading, error } = usePublicationData(orcidsToFetch);

  const filteredPublications = useMemo(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    if (!lowercasedFilter) {
      return publications;
    }
    return publications.filter((pub) => {
      return (
        (pub.title || "").toLowerCase().includes(lowercasedFilter) ||
        (pub.authors || "").toLowerCase().includes(lowercasedFilter) ||
        (pub.journal || "").toLowerCase().includes(lowercasedFilter) ||
        (pub.year || "").toString().includes(lowercasedFilter) ||
        (pub.type || "").toLowerCase().includes(lowercasedFilter)
      );
    });
  }, [searchTerm, publications]);

  const handleDownloadCSV = () => {
    // This function depends on the 'papaparse' library (Papa) which is already imported.
    const dataToExport = filteredPublications.map((pub) => ({
      Title: pub.title,
      Authors: pub.authors,
      Journal: pub.journal,
      Year: pub.year,
      Type: pub.type,
      Link: pub.link,
    }));

    const csv = Papa.unparse(dataToExport);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "publications.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Navbar />
      <main className="publications-content">
        <h1>Our Publications</h1>
        <p>
          {filterByPI
            ? `Showing publications from our Principal Investigator.`
            : `Showing combined publications from all current lab members.`}
        </p>

        {loading && <div className="loading-spinner"></div>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && (
          <>
            <div className="toolbar-container">
              <input
                type="text"
                placeholder="Search publications..."
                className="search-bar"
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="pi-filter">
                <label htmlFor="pi-toggle">
                  {filterByPI
                    ? "Showing PI Only"
                    : "Showing All Current Members"}
                </label>
                <label className="switch">
                  <input
                    id="pi-toggle"
                    type="checkbox"
                    checked={filterByPI}
                    onChange={() => setFilterByPI(!filterByPI)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <button
                onClick={handleDownloadCSV}
                disabled={filteredPublications.length === 0}
              >
                Download CSV
              </button>
            </div>

            <div className="results-count">
              Showing <strong>{filteredPublications.length}</strong>{" "}
              publications.
            </div>

            {/* --- FIX #2: Restored the missing rendering logic --- */}
            <div className="publications-list">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub) => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))
              ) : (
                <p className="no-results-message">No publications found.</p>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default PublicationsPage;
