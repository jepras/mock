import React, { useContext } from 'react';

import { FormContext } from '../contexts/FormContext';
import ShowGraph from '../components/ShowGraph';

/* import steps */

const End = () => {
  const { user } = useContext(FormContext);

  console.log('user: ', user);

  /* const Content = () => {
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
        
          poster="false"
          autoPlay
  
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
      
      />
    );
  }; */

  return (
    <>
      <p>
        Welcome back! You were not alone on this mission. Connection being
        established and the MOCK will be built shortly!
      </p>
      <ShowGraph />
      <p>
        Do you want to share this with {user.with} that you thought about
        earlier?{' '}
      </p>
    </>
  );
};

export default End;
