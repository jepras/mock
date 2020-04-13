import React, { useContext, useState } from "react";
import { StepContext } from "../contexts/StepContext";
import MapForm from "../components/MapForm";
import earthzoom from "../assets/media/vid/earthzoom.mp4";

const MissionStart2 = () => {
  const [playVideo, setPlayVideo] = useState(null);
  const { handleNext } = useContext(StepContext);

  const acceptChallenge = () => {
    setPlayVideo(true);
  };

  const Transition = () => {
    return (
      <video src={earthzoom} autoplay="true" onEnded={() => handleNext()} />
    );
  };

  const Content = () => {
    return (
      <>
        <p>
          At what place have you been the happiest? (press submit before
          clicking next)
        </p>
        <MapForm />
        {/* <p>What place have had the biggest impact on your life?</p>
        <MapForm />
        <p>Where have you been impacted emotionally the most?</p>
        <MapForm /> */}
        <button className="button" color="primary" onClick={acceptChallenge}>
          Next
        </button>
      </>
    );
  };

  return <>{playVideo === true ? <Transition /> : <Content />}</>;
};

export default MissionStart2;
