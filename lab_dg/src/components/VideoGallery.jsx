import React from "react";
import { videoData } from "../data/media";
import "./VideoGallery.css";

function VideoGallery() {
  return (
    <div className="video-grid">
      {videoData.map((video) => (
        <div key={video.id} className="video-item">
          <video width="100%" controls>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-caption">{video.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoGallery;
