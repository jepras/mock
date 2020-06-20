import React, { useState } from 'react';
import { Video } from 'cloudinary-react';

import ArchitectContent from '../containers/ArchitectContent';
import OverlayComponent from '../components/OverlayComponent';

/* import steps */

const Architect = () => {
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
      <Video
        cloudName="jepras"
        publicId="ambience"
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
          <OverlayComponent />
          <Background />
          <ArchitectContent />
          <Audio />
        </>
      )}
    </>
  );
};

export default Architect;
