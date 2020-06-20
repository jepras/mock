import React, { useState } from 'react';
import { Video } from 'cloudinary-react';
import vand from '../assets/media/aud/vand.wav';

import VisionaryContent from '../containers/VisionaryContent';
import OverlayComponent from '../components/OverlayComponent';

/* import steps */

const Visionary = () => {
  const [playVideo, setPlayVideo] = useState(true);

  const Transition = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="trimmednoise"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          loop
        />
        <Video
          cloudName="jepras"
          publicId="Jen_voice_5"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          onEnded={() => setPlayVideo(false)}
          style={{ display: 'none' }}
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

  return (
    <>
      {playVideo === true ? (
        <Transition />
      ) : (
        <>
          <OverlayComponent />
          <Background />
          <VisionaryContent />
          <Audio />
        </>
      )}
    </>
  );
};

export default Visionary;
