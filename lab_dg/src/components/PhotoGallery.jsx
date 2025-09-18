import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { photoData } from "../data/media";
import "./PhotoGallery.css";

function PhotoGallery() {
  const [index, setIndex] = useState(-1);

  const slides = photoData.map(({ src, caption }) => ({
    src: src,
    title: caption,
    download: src,
  }));

  return (
    <>
      <div className="photo-grid">
        {photoData.map((photo, photoIndex) => (
          <div
            key={photo.id}
            className="photo-item"
            onClick={() => setIndex(photoIndex)}
          >
            <img src={photo.src} alt={photo.caption} />
          </div>
        ))}
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Download, Zoom]}
      />
    </>
  );
}

export default PhotoGallery;
