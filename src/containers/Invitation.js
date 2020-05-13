import React, { useContext, useState } from "react";
import { StepContext } from "../contexts/StepContext";
import NameForm from "../components/NameForm";

import tvnoise from "../assets/media/vid/tvnoise.mp4";
import newsspeak from "../assets/media/aud/newsspeak.wav";
import audionews from "../assets/media/aud/audionews.wav";
import downloadcomplete from "../assets/media/aud/downloadcomplete.wav";
import ink1 from "../assets/media/vid/ink1.mp4";

const Invitation = () => {
  const [playVideo, setPlayVideo] = useState(null);
  const [playSecondAudio, setPlaySecondAudio] = useState(null);
  const { handleNext } = useContext(StepContext);

  const acceptChallenge = () => {
    setPlayVideo(true);
  };

  const Transition = () => {
    return (
      <>
        <video src={tvnoise} autoplay="true" onEnded={() => handleNext()} />
        <audio
          controls
          autoPlay
          src={downloadcomplete}
          style={{ display: "none" }}
          onEnded={() => handleNext()}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        ); };
      </>
    );
  };

  const Background = () => {
    return <video src={ink1} autoPlay loop />;
  };

  const Content = () => {
    return (
      <div className="step-one">
        <button className="button" color="primary" onClick={acceptChallenge}>
          Next
        </button>
      </div>
    );
  };

  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={audionews}
        loop={false}
        style={{ display: "none" }}
        onEnded={() => setPlaySecondAudio(true)}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  const Audio2 = () => {
    return (
      <audio
        controls
        autoPlay
        src={newsspeak}
        style={{ display: "none" }}
        onEnded={() => handleNext()}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  return (
    <>
      {playVideo === true ? (
        <Transition />
      ) : (
        <>
          <Background />
          <Content />

          {playSecondAudio === true ? <Audio2 /> : <Audio />}
        </>
      )}
    </>
  );
};

export default Invitation;
