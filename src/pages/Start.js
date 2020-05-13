import React from "react";
import { Link } from "react-router-dom";

import Dot from "../components/Dot";

import floatingBlob from "../assets/media/vid/floatingblob.mp4";

const Start = () => {
  return (
    <div
      className="experience-container"
      style={{ backgroundColor: "#c0c0c0" }}
    >
      {/* <div className="dot-wrapper" style={{ top: "67vh", left: "50%" }}>
        <Link to="experience">
          <Dot2 />
        </Link>
      </div> */}

      {/* <video src={floatingBlob} muted loop autoplay='true' /> */}

      <Link to="experience">
        <Dot top="50vh" left="50%" />
      </Link>

      <div className="center-div" style={{ marginTop: "40%" }}>
        <div
          className="content"
          style={{ position: "relative", width: "100%" }}
        >
          <div className="typewriter">
            <h1 className="has-text-black">
              put on your headphones and enter full screen
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
