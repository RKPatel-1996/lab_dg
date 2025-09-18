import React from "react";
import "./ScrollButtons.css";

function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-buttons-container">
      <button
        onClick={scrollToTop}
        className="scroll-button"
        aria-label="Scroll to top"
      >
        ▲
      </button>
      <button
        onClick={scrollToBottom}
        className="scroll-button"
        aria-label="Scroll to bottom"
      >
        ▼
      </button>
    </div>
  );
}

export default ScrollButtons;
