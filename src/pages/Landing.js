import React from 'react';
import { Link } from 'react-router-dom';

import Dot from '../components/Dot';
import Timer from '../components/Timer';

import floatingBlob from '../assets/media/vid/floatingblob.mp4';

const Landing = () => {
  return (
    <div className='experience-container'>
      <video src={floatingBlob} muted loop autoplay='true' />

      <Link to='start'>
        <Dot top='30vh' left='50%' />
      </Link>

      <div className='center-div'>
        <div
          className='content'
          style={{ position: 'relative', width: '100%' }}
        >
          <h1 className='has-text-white title has-text-centered'>
            Expect the mock
          </h1>

          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
