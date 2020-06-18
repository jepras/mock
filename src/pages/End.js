import React, { useState, useContext } from 'react';
import { Video } from 'cloudinary-react';
import ambience from '../assets/media/aud/ambience.wav';

import { FormContext } from '../contexts/FormContext';

/* import steps */

const Architect = () => {
  const { user } = useContext(FormContext);

  console.log('user: ', user);

  const Content = () => {
    return (
      <div className="fullscreen-bg">
        <p>the end</p>
        {JSON.stringify(user)}
      </div>
    );
  };

  const Background = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="cropped-sphere"
          className="fullscreen-bg__video"
          /* className={`${
            fading
              ? 'fade-to-black fullscreen-bg__video'
              : 'fullscreen-bg__video'
          }`} */
          poster="false"
          autoPlay
          /* onEnded={() => setPlayVideo(true)} */
          muted
          loop
        />
      </div>
    );
  };

  const Audio = () => {
    return (
      <audio controls autoPlay src={ambience} loop style={{ display: 'none' }}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  return (
    <>
      <Background />
      <Content />
      <Audio />
    </>
  );
};

export default Architect;
