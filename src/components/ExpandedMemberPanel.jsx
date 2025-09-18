// src/components/ExpandedMemberPanel.jsx
import React, { useState, useMemo } from "react";
import PublicationCard from "./PublicationCard";
import { useMemberPublications } from "../hooks/useMemberPublications"; // 1. Import the new hook
import "./ExpandedMemberPanel.css";

function ExpandedMemberPanel({ member }) {
  // 2. No longer needs `memberPublications` prop
  // 3. Use the new hook to fetch data based on the member's ORCID
  const {
    publications: memberPublications,
    loading,
    error,
  } = useMemberPublications(member.orcid);

  const [searchTerm, setSearchTerm] = useState("");

  // The rest of the component logic remains the same,
  // it just uses the data fetched from our new hook.
  const filteredPublications = useMemo(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    if (!lowercasedFilter) {
      return memberPublications;
    }
    return memberPublications.filter((pub) => {
      return (
        (pub.title || "").toLowerCase().includes(lowercasedFilter) ||
        (pub.authors || "").toLowerCase().includes(lowercasedFilter) ||
        (pub.journal || "").toLowerCase().includes(lowercasedFilter) ||
        (pub.year || "").toString().includes(lowercasedFilter) ||
        (pub.type || "").toLowerCase().includes(lowercasedFilter)
      );
    });
  }, [searchTerm, memberPublications]);

  return (
    <div className="expanded-panel">
      <div className="expanded-bio">
        <h2>About {member.name}</h2>
        <p>{member.bio || "No biography available."}</p>
      </div>

      <div className="expanded-publications">
        <h3>Publications</h3>
        {/* Render loading or error states */}
        {loading && <div className="loading-spinner"></div>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && (
          <>
            <div className="publication-toolbar">
              <input
                type="text"
                placeholder="Search this member's publications..."
                className="search-bar-inline"
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))
            ) : (
              <p className="no-results-message">
                No publications found for this member.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ExpandedMemberPanel;
