import React from "react";
import { Link } from "react-router-dom";
import "./Test.css";
import floatingBlob from "../assets/media/vid/floatingblob.mp4";

const Test = () => {
  const testFunction = () => {
    console.log("test!!");
  };
  return (
    <div>
      <div class="demo-container">
        <video src={floatingBlob} autoPlay loop muted />

        <Link to="experience">
          <div class="absolute square">
            <div className="ringring"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Test;
