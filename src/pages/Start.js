import React from "react";
import { Link } from "react-router-dom";
import startBg from "../assets/media/img/start-dark-bg.jpg";

const Start = () => {
  return (
    <div>
      <img src={startBg} alt="black background" class="bg" />
      <br />
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
        put on your headphones and enter full screen
      </p>
      <br />
      <Link to="/experience">
        <button className="button">go to experience</button>
      </Link>
    </div>
  );
};

export default Start;
