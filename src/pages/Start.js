import React from 'react';
import { Link } from 'react-router-dom';
import Dot from '../components/Dot';

const Start = () => {
  return (
    <div
      className="experience-container"
      style={{ backgroundColor: '#c0c0c0' }}
    >
      <Link to="experience">
        <Dot top="40vh" left="50%" />
      </Link>

      <div className="center-div" style={{ marginTop: '40%' }}>
        <div
          className="content"
          style={{ position: 'relative', width: '100%' }}
        >
          <div className="typewriter">
            <h1 className="has-text-black">
              Put on your headphones and enter full screen. <br />
              The experience should be done on a computer.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
