import React, { useState } from 'react';
import { Video } from 'cloudinary-react';

import CloudsContent from './CloudsContent';
import CloudsContextProvider from '../contexts/CloudsContext';

const Clouds1 = () => {
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
          publicId="clouds"
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
          <CloudsContextProvider>
            <CloudsContent />
          </CloudsContextProvider>
          <Audio />
        </>
      )}
    </>
  );
};

export default Clouds1;
