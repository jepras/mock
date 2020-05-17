import React, { useContext, useState, useEffect, useRef } from 'react';
import { StepContext } from '../contexts/StepContext';
import { Link } from 'react-router-dom';

import { Video } from 'cloudinary-react';
import Dot from '../components/Dot';

import noise from '../assets/media/aud/noise.wav';
import breath from '../assets/media/aud/breath.wav';

import lights from '../assets/media/img/lights.jpg';

const Invitation = () => {
  const [playVideo, setPlayVideo] = useState(null);
  const { handleNext } = useContext(StepContext);

  const Transition = () => {
    return <></>;
  };

  const Background = () => {
    return <img src={lights} alt="lights" className="fade1" />;
  };

  const Content = () => {
    return (
      <div onClick={handleNext}>
        <Dot top="50vh" left="50%" />
      </div>
    );
  };

  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={breath}
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
      <audio controls autoPlay src={noise} style={{ display: 'none' }}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  return (
    <div className="experience-container">
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
    </div>
  );
};

export default Invitation;
