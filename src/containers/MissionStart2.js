import React, { useContext, useState } from 'react';
import { StepContext } from '../contexts/StepContext';
import { Video } from 'cloudinary-react';

import jen4 from '../assets/media/aud/jen4.wav';
import deepbreath from '../assets/media/aud/deepbreath.wav';

const MissionStart2 = () => {
  const [playVideo, setPlayVideo] = useState(null);
  const { handleNext } = useContext(StepContext);

  /* const acceptChallenge = () => {
    setPlayVideo(true);
  }; */

  const Transition = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="earthzoom-reverse"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          onEnded={() => handleNext()}
        />
      </div>
    );
  };

  const Background = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="breeze-fade"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          onEnded={() => setPlayVideo(true)}
          muted
        />
      </div>
    );
  };

  const Content = () => {
    return <></>;
  };

  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={jen4}
        loop={false}
        style={{ display: 'none' }}
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
        src={deepbreath}
        loop={false}
        style={{ display: 'none' }}
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
          <Audio />
          <Audio2 />
        </>
      )}
    </>
  );
};

export default MissionStart2;
