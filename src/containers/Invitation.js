import React, { useContext, useState } from 'react';
import { StepContext } from '../contexts/StepContext';

import { Video } from 'cloudinary-react';

import news from '../assets/media/aud/news.wav';
/* import whitenoiselyd from '../assets/media/aud/whitenoiselyd.wav'; */

const Invitation = () => {
  const [playVideo, setPlayVideo] = useState(null);
  const { handleNext } = useContext(StepContext);

  const acceptChallenge = () => {
    setPlayVideo(true);
  };

  const Transition = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="tvnoise"
          autoPlay
          loop
          className="fullscreen-bg__video"
        />

        {/* <audio
          controls
          autoPlay
          src={whitenoiselyd}
          style={{ display: 'none' }}
          
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio> */}
        <Video
          cloudName="jepras"
          publicId="Jen_voice_1"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          style={{ display: 'none' }}
          onEnded={() => handleNext()}
        />
      </div>
    );
  };

  const Background = () => {
    return (
      <div className="fullscreen-bg">
        <video
          className="fullscreen-bg__video"
          autoPlay
          preload="true"
          poster="true"
          src="https://res.cloudinary.com/jepras/video/upload/ink1.mp4"
          type="video/mp4"
        />
      </div>
    );
  };

  const Content = () => {
    return (
      <div onClick={acceptChallenge}>{/* <Dot top="50vh" left="50%" /> */}</div>
    );
  };

  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={news}
        loop={false}
        style={{ display: 'none' }}
        onEnded={() => acceptChallenge()}
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
        </>
      )}
    </>
  );
};

export default Invitation;
