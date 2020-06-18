import React, { useState, useContext } from 'react';
import { Video } from 'cloudinary-react';
import vand from '../assets/media/aud/vand.wav';

import VisionaryContent from '../containers/VisionaryContent';
import { FormContext } from '../contexts/FormContext';

/* import steps */

const Visionary = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const { user } = useContext(FormContext);

  console.log('user: ', user);

  const Transition = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="trimmednoise"
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
          publicId="waterstill"
          className="fullscreen-bg__video"
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
      <audio controls autoPlay src={vand} loop style={{ display: 'none' }}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  const Overlay = () => {
    return (
      <div
        className={`${user.colour ? 'overlay-test' : 'none'}`}
        style={{
          backgroundColor: `${user.colour ? user.colour.value.value : 'none'}`,
        }}
      ></div>
    );
  };

  return (
    <>
      {playVideo === true ? (
        <Transition />
      ) : (
        <>
          <Overlay />
          <Background />
          <VisionaryContent />
          <Audio />
        </>
      )}
    </>
  );
};

export default Visionary;
