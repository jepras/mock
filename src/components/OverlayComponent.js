import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

const OverlayComponent = () => {
  const { user } = useContext(FormContext);

  console.log('user: ', user);

  return (
    <>
      <div
        className={`${user.colour ? 'overlay-test' : 'none'}`}
        style={{
          backgroundColor: `${user.colour ? user.colour.value.value : 'none'}`,
        }}
      ></div>
    </>
  );
};

export default OverlayComponent;
