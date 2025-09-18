// src/components/TeamMemberCard.jsx
import React, { useState } from "react";
import "./TeamMemberCard.css";

// 1. Accept onSelect and isSelected as props
function TeamMemberCard({ member, onSelect, isSelected }) {
  const getOrcidId = (orcid) => {
    if (!orcid) return null;
    const parts = orcid.split("/");
    return parts[parts.length - 1] || orcid;
  };

  const orcidId = getOrcidId(member.orcid);
  const placeholderImage = "/profile-photos/placeholder.png";
  const [imgSrc, setImgSrc] = useState(member.photo || placeholderImage);

  const handleImageError = () => {
    setImgSrc(placeholderImage);
  };

  // 2. Add a dynamic className string
  const cardClassName = `team-card ${isSelected ? "selected" : ""}`;

  return (
    // 3. Add onClick handler to the main div
    <div className={cardClassName} onClick={() => onSelect(member.id)}>
      <div className="card-image-container">
        <img
          src={imgSrc}
          onError={handleImageError}
          alt={`Profile of ${member.name || "Team Member"}`}
        />
      </div>

      <div className="card-info">
        <h3>
          {member.name || (
            <span className="fallback-text">Name Unavailable</span>
          )}
        </h3>
        <p>
          {member.role || (
            <span className="fallback-text">Role Unavailable</span>
          )}
        </p>

        <div className="social-links">
          {/* Social links remain the same */}
          {member.email && <a href={`mailto:${member.email}`}>Email</a>}
          {orcidId && (
            <a
              href={`https://orcid.org/${orcidId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ORCID
            </a>
          )}
          {member.researchGate && (
            <a
              href={member.researchGate}
              target="_blank"
              rel="noopener noreferrer"
            >
              ResearchGate
            </a>
          )}
          {member.googleScholar && (
            <a
              href={member.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Scholar
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {member.linkedIn && (
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {member.website && (
            <a href={member.website} target="_blank" rel="noopener noreferrer">
              website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
