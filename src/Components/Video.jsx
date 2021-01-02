import React from "react";
import { Link } from "react-scroll";
import "../App.css";
import "./Video.css";

const Video = () => {
  return (
    <>
      <div className="video-container">
        <video preload="true" autoPlay={true} loop="loop" muted>
          <source src="assets/bgVideo.mp4" />
        </video>
        {/* <h1>hello i am h1</h1>
        <p>i am p tag</p> */}
        <Link to="here">
          <div className="slider_down_btn"></div>
        </Link>
        {/* <div className="videoButton"></div> */}
      </div>
      {/* <div style={{ background: "#f00", height: 15000 }}></div> */}
    </>
  );
};

export default Video;
