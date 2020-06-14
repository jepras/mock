import React, { useContext, useState } from 'react';
import { StepContext } from '../contexts/StepContext';
import { Video } from 'cloudinary-react';

import jen4 from '../assets/media/aud/jen4.wav';
import SelectForm from '../components/SelectForm';

const Clouds2 = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const { handleNext } = useContext(StepContext);

  const Transition = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="earthzoom-reverse"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          onEnded={() => setPlayVideo(false)}
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
          /* onEnded={() => setPlayVideo(true)} */
          muted
        />
      </div>
    );
  };

  const Content = () => {
    return (
      <>
        <div className="center-div-mission" style={{ top: '70%' }}>
          <div className="absolute mission-overlay content">
            Which 3 characteristics/values do you appreciate most in the people
            you are with?
            <SelectForm childInput="characteristics" next="normal" />
          </div>
        </div>
      </>
    );
  };

  const Audio = () => {
    return (
      <Video
        cloudName="jepras"
        publicId="videoplayback"
        className="fullscreen-bg__video"
        poster="false"
        autoPlay
        style={{ display: 'none' }}
        /* onEnded={() => setPlayVideo(true)} */
      />
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

export default Clouds2;
