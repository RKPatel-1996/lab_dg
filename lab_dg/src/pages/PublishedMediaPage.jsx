import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PhotoGallery from "../components/PhotoGallery"; // We will create this next
import VideoGallery from "../components/VideoGallery"; // We will create this next
import "./PublishedMediaPage.css";

function PublishedMediaPage() {
  const [activeTab, setActiveTab] = useState("photos"); // 'photos' is the default tab

  return (
    <div>
      <Navbar />
      <main className="media-content">
        <h1>Published Media</h1>
        <p>
          A collection of photos and videos from our lab's activities and
          research.
        </p>

        <div className="media-tabs">
          <button
            className={activeTab === "photos" ? "active" : ""}
            onClick={() => setActiveTab("photos")}
          >
            Photos
          </button>
          <button
            className={activeTab === "videos" ? "active" : ""}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        <div className="media-display">
          {activeTab === "photos" ? <PhotoGallery /> : <VideoGallery />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PublishedMediaPage;
