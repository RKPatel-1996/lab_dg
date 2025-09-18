import React from "react";
import "./ResourceCard.css";

function ResourceCard({ resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card-link"
    >
      <div className="resource-card">
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
        <span className="resource-link-text">Go to Resource &rarr;</span>
      </div>
    </a>
  );
}

export default ResourceCard;
