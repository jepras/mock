import React from 'react';
import '../components/Dot.css';

const Dot = (props) => {
  return (
    <div
      className="absolute square"
      style={{ top: props.top, left: props.left }}
    >
      <div className="ringring"></div>
    </div>
  );
};

export default Dot;
