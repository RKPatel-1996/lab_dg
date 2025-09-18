import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import {
  youtubeVideos,
  protocols,
  githubRepos,
  communityLinks,
  highlightedContent,
} from "../data/resources";
import "./ResourcesPage.css";
import Footer from "../components/Footer";

function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterResources = (data, term) => {
    const lowercasedFilter = term.toLowerCase();
    if (!lowercasedFilter) return data;

    return data.filter(
      (item) =>
        (item.title || "").toLowerCase().includes(lowercasedFilter) ||
        (item.description || "").toLowerCase().includes(lowercasedFilter)
    );
  };

  const filteredHighlights = useMemo(
    () => filterResources(highlightedContent, searchTerm),
    [searchTerm]
  );
  const filteredVideos = useMemo(
    () => filterResources(youtubeVideos, searchTerm),
    [searchTerm]
  );
  const filteredProtocols = useMemo(
    () => filterResources(protocols, searchTerm),
    [searchTerm]
  );
  const filteredRepos = useMemo(
    () => filterResources(githubRepos, searchTerm),
    [searchTerm]
  );
  const filteredLinks = useMemo(
    () => filterResources(communityLinks, searchTerm),
    [searchTerm]
  );

  const totalResults =
    filteredHighlights.length +
    filteredVideos.length +
    filteredProtocols.length +
    filteredRepos.length +
    filteredLinks.length;

  return (
    <div>
      <Navbar />
      <main className="resources-content">
        <h1>Resources</h1>
        <p>
          A collection of useful documents, links, and media from our lab and
          the broader scientific community.
        </p>

        <div className="resource-search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search all resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredHighlights.length > 0 && (
          <section className="resource-section">
            <h2>Highlights</h2>
            <div className="card-grid">
              {filteredHighlights.map((item) =>
                item.type === "video" ? (
                  // --- CODE RESTORED HERE ---
                  <div key={item.id} className="video-highlight">
                    <div className="video-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.embedId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ) : (
                  <ResourceCard key={item.id} resource={item} />
                )
              )}
            </div>
          </section>
        )}

        {filteredVideos.length > 0 && (
          <section className="resource-section">
            <h2>From Our Channels</h2>
            <div className="video-grid">
              {filteredVideos.map((video) => (
                // --- CODE RESTORED HERE ---
                <div key={video.id}>
                  <div className="video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredProtocols.length > 0 && (
          <section className="resource-section">
            <h2>Documents & Protocols</h2>
            <div className="card-grid">
              {filteredProtocols.map((protocol) => (
                <ResourceCard key={protocol.id} resource={protocol} />
              ))}
            </div>
          </section>
        )}

        {filteredRepos.length > 0 && (
          <section className="resource-section">
            <h2>GitHub Repositories</h2>
            <div className="card-grid">
              {filteredRepos.map((repo) => (
                <ResourceCard key={repo.id} resource={repo} />
              ))}
            </div>
          </section>
        )}

        {filteredLinks.length > 0 && (
          <section className="resource-section">
            <h2>Community Resources</h2>
            <div className="card-grid">
              {filteredLinks.map((link) => (
                <ResourceCard key={link.id} resource={link} />
              ))}
            </div>
          </section>
        )}

        {totalResults === 0 && searchTerm && (
          <p className="no-results-message">
            No resources found matching your search.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ResourcesPage;
