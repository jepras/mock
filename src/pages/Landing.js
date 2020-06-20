import React from 'react';
import { Link } from 'react-router-dom';

import Dot from '../components/Dot';
/* import Timer2 from '../components/Timer2'; */

const Landing = () => {
  return (
    <div className="experience-container">
      <div className="center-div" style={{ marginTop: '20%' }}>
        <div
          className="content"
          style={{ position: 'relative', width: '100%' }}
        >
          <h1 className="has-text-black title" style={{ textAlign: 'center' }}>
            <Link to="start" className="secret-link">
              Launch the MOCK
            </Link>
            <Link to="start">
              <Dot top="20vh" left="50%" />
            </Link>
            <br />
            <br />
            {/* <Timer2 /> */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
