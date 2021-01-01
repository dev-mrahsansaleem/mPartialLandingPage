import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

const Video = () => {
  return (
    <>
      <div className="video-container">
        <video preload="true" autoPlay={true} loop="loop" muted>
          <source src="assets/bgVideo.mp4" />
        </video>
        <h1>hello i am h1</h1>
        <p>i am p tag</p>
        <div className="videoButton">
          <Link to="/" className="nav-links">
            i am link button
          </Link>
        </div>
      </div>
    </>
  );
};

export default Video;
