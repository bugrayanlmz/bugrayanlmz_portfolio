import React from "react";
import { FaYoutube } from "react-icons/fa6";

function Blog() {
  return (
    <div className="main-content active">
      <div className="youtube-section">
        <div className="youtube-header">
          <FaYoutube size={64} color="#FF0000" />
          <h1 className="section-title">Youtube</h1>
          <p className="youtube-description">
            Coming soon! Here you'll find my video content about software
            development, AI projects, and tech tutorials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
