import React, { useEffect } from "react";
import movie from "../assets/media/movie.mp4";

const FirstStep = (props) => {
  const { handleNext } = props;

  console.log("props", props);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 7 seconds!");
      document.getElementById("show").style.display = "block";
      document.getElementById("hide").style.display = "none";
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const Transition = <video id="hide" controls src={movie} />;
  const Scene = (
    <div id="show" className="show-challenge" style={{ display: "none" }}>
      <div className="center-div">
        <div className="content">
          Do you accept the challenge?
          <button className="button" color="primary" onClick={handleNext}>
            Yes
          </button>
          <button
            className="button"
            color="primary"
            disabled={true}
            onClick={handleNext}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Scene />
      <Transition />
    </div>
  );
};

export default FirstStep;
