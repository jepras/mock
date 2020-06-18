import React, { useState, useContext } from 'react';
import { Video } from 'cloudinary-react';

import ArchitectContent from '../containers/ArchitectContent';
import { FormContext } from '../contexts/FormContext';

/* import steps */

const Architect = () => {
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

  /* const Overlay = () => {
    return (
      <div className={`${user.basicvalues ? 'fade-to-black' : 'none'}`}></div>
    );
  }; */

  return (
    <>
      {playVideo === true ? (
        <Transition />
      ) : (
        <>
          {/* <Overlay /> */}
          <Background />
          <ArchitectContent />
          <Audio />
        </>
      )}
    </>
  );
};

export default Architect;
