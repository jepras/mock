import React from 'react';
import { Link } from 'react-router-dom';
import Dot from '../components/Dot';
import clock from '../assets/media/aud/clock.wav';

const Start = () => {
  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={clock}
        loop={true}
        style={{ display: 'none' }}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  const Content = () => {
    return (
      <div className="experience-container">
        <Link to="experience">
          <Dot top="40vh" left="50%" />
        </Link>

        <div className="center-div" style={{ marginTop: '30%' }}>
          <div
            className="content"
            style={{ position: 'relative', width: '100%' }}
          >
            <div className="typewriter">
              <h1 className="has-text-black">
                Put on your headphones and enter full screen. <br />
                The experience should be done on a computer.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Content />
      <Audio />
    </>
  );
};

export default Start;
