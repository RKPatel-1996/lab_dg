// src/components/PublicationCard.jsx
import React from "react";
import "./PublicationCard.css";

const formatType = (type) => {
  if (!type) return "Publication";
  return type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

const getTypeClass = (type) => {
  if (!type) return "type-default";
  const lowercasedType = type.toLowerCase();
  if (lowercasedType.includes("journal article")) return "type-journal";
  if (lowercasedType.includes("book chapter")) return "type-book-chapter";
  if (lowercasedType.includes("book")) return "type-book";
  if (lowercasedType.includes("conference")) return "type-conference";
  return "type-default";
};

// This component is now much cleaner as it receives simple props
function PublicationCard({ publication }) {
  const { title, journal, year, type, link, authors } = publication;
  const typeClassName = getTypeClass(type);

  return (
    <div className="publication-card">
      <div className="card-header">
        <span className={`publication-type ${typeClassName}`}>
          {formatType(type)}
        </span>
        <span className="publication-year">{year}</span>
      </div>
      <div className="card-body">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="publication-title"
        >
          {title}
        </a>
        {journal && (
          <p className="publication-journal">
            <em>{journal}</em>
          </p>
        )}
        {authors && <p className="publication-authors">{authors}</p>}
      </div>
    </div>
  );
}

export default PublicationCard;
