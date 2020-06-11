import React, { useContext, useEffect } from 'react';
import { Video, Transformation } from 'cloudinary-react';

/* imports */
import { StepContext } from '../contexts/StepContext';
import Dot from '../components/Dot';

/* media */
import clock from '../assets/media/aud/clock.wav';

const Intro = () => {
  const { handleNext } = useContext(StepContext);

  useEffect(() => {
    console.log('Intro rendered');
    return () => {
      console.log('component cleaned up');
    };
  }, []);

  const Background = () => {
    return (
      <div className="fullscreen-bg">
        {/* <Video
          cloudName="jepras"
          publicId="opening"
          poster="true"
          className="fullscreen-bg__video"
          autoPlay
          preload="true"
        /> */}
        <video
          className="fullscreen-bg__video"
          autoPlay
          preload="true"
          poster="true"
          src="http://res.cloudinary.com/jepras/video/upload/opening.mp4"
          type="video/mp4"
        />
      </div>
    );
  };

  const Overlay = () => {
    return (
      <>
        <div onClick={handleNext}>
          <Dot top="90vh" left="50%" />
        </div>

        <div className="center-div" style={{ top: '50px' }}>
          <div
            className="content"
            style={{ position: 'relative', width: '100%' }}
          >
            <p>
              You will be taken to the future, on a mission that nobody else can
              solve but you. Are you ready to travel?
            </p>
          </div>
        </div>
      </>
    );
  };

  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={clock}
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
      <Background />
      <Overlay />
      <Audio />
    </>
  );
};

export default Intro;
