import React, { useState } from 'react';
import { Video } from 'cloudinary-react';

import vand from '../assets/media/aud/vand.wav';

import ArchitectContent from '../containers/ArchitectContent';
import ArchitectContextProvider from '../contexts/ArchitectContext';

const Architect = () => {
  const [playVideo, setPlayVideo] = useState(true);

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
          publicId="waterstill"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          /* onEnded={() => setPlayVideo(true)} */
          muted
        />
      </div>
    );
  };

  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={vand}
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
          <ArchitectContextProvider>
            <ArchitectContent />
          </ArchitectContextProvider>
          <Audio />
        </>
      )}
    </>
  );
};

export default Architect;
