import React, { useContext, useState } from "react";
import { StepContext } from "../contexts/StepContext";
import NameForm from "../components/NameForm";
import colortrans from "../assets/media/vid/colorfultrans.mp4";
import whitesmokebottom from "../assets/media/vid/whitesmokebottom.mp4";

const Invitation = () => {
  const [playVideo, setPlayVideo] = useState(null);
  const { handleNext } = useContext(StepContext);

  const acceptChallenge = () => {
    setPlayVideo(true);
  };

  const Transition = () => {
    return (
      <video src={colortrans} autoplay="true" onEnded={() => handleNext()} />
    );
  };

  const Background = () => {
    return <video src={whitesmokebottom} autoPlay loop />;
  };

  const Content = () => {
    return (
      <div className="step-one">
        <p>
          If you want to take part in this, write your name, press submit and
          continue
        </p>
        <NameForm />
        <button className="button" color="primary" onClick={acceptChallenge}>
          Next
        </button>
      </div>
    );
  };

  /* return (
    <>
      <Background />
      <Content />
    </>
  ); */

  return (
    <>
      {playVideo === true ? (
        <Transition />
      ) : (
        <>
          <Background />
          <Content />
        </>
      )}
    </>
  );
};

export default Invitation;
