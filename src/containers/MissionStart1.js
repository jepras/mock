import React, { useContext, useState } from "react";
import { StepContext } from "../contexts/StepContext";
import flickering from "../assets/media/vid/flickering.mp4";

const MissionStart1 = () => {
  const [playVideo, setPlayVideo] = useState(null);
  const { handleNext } = useContext(StepContext);

  const acceptChallenge = () => {
    setPlayVideo(true);
    setTimeout(() => {
      console.log("Waiting 2 seconds!");
      handleNext();
    }, 3000);
  };

  const Content = () => {
    return (
      <div className="step-one">
        <p>Are you ready to participate? </p>

        <button className="button" color="primary" onClick={acceptChallenge}>
          I accept
        </button>
      </div>
    );
  };

  const Transition = () => {
    return <video src={flickering} autoplay="true" loop />;
  };

  return <>{playVideo === true ? <Transition /> : <Content />}</>;
};

export default MissionStart1;
