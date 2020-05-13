import React, { useContext, useState } from "react";
import { StepContext } from "../contexts/StepContext";

import { Video } from "cloudinary-react";

import newsspeak from "../assets/media/aud/newsspeak.wav";
import audionews from "../assets/media/aud/audionews.wav";
import downloadcomplete from "../assets/media/aud/downloadcomplete.wav";

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
        <Video
          cloudName="jepras"
          publicId="tvnoise"
          poster="false"
          onEnded={() => handleNext()}
          autoPlay
        />
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
    return (
      <Video cloudName="jepras" publicId="ink1" poster="false" autoPlay loop />
    );
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
