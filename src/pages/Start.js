import React from "react";
import { Link } from "react-router-dom";
import Dot from "../components/Dot";

import floatingBlob from "../assets/media/vid/floatingblob.mp4";

const Start = () => {
  return (
    <div className="experience-container">
      {/* <div className="dot-wrapper" style={{ top: "67vh", left: "50%" }}>
        <Link to="experience">
          <Dot2 />
        </Link>
      </div> */}

      <video src={floatingBlob} muted loop autoplay="true" />

      <Link to="experience">
        <Dot top="70vh" left="50%" />
      </Link>

      <div className="center-div">
        <div
          className="content"
          style={{ position: "relative", width: "100%" }}
        >
          <div className="typewriter">
            <h1 className="has-text-white">
              put on your headphones and enter full screen
            </h1>
          </div>
        </div>
      </div>
      <div className="center-div">
        <div
          className="content"
          style={{ position: "relative", width: "100%" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <p className="has-text-white" style={{ position: "relative" }}>
            (for this draft version you'll need to press submit in every form
            before pressing "Next" to save answers .. don't blame me)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
