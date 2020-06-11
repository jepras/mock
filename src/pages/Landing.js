import React from 'react';
import { Link } from 'react-router-dom';

import Dot from '../components/Dot';
import Timer from '../components/Timer';

const Landing = () => {
  return (
    <div className="experience-container">
      <Link to="start">
        <Dot top="20vh" left="50%" />
      </Link>

      <div className="center-div" style={{ marginTop: '20%' }}>
        <div
          className="content"
          style={{ position: 'relative', width: '100%' }}
        >
          <h1 className="has-text-black title" style={{ textAlign: 'center' }}>
            Expect the mock
          </h1>

          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
