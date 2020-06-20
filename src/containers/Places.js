import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

import { Video } from 'cloudinary-react';
import Place1 from './Place1';
import Place2 from './Place2';
import Place3 from './Place3';
import Place4 from './Place4';

const Places = () => {
  const { activePlacesStep } = useContext(StepContext);

  console.log('places step:', activePlacesStep);

  function getPlacesStepContent(step) {
    console.log('step: ', step);
    switch (step) {
      case 0:
        return <Place1 />;

      case 1:
        return <Place2 />;

      case 2:
        return <Place3 />;

      case 3:
        return <Place4 />;

      default:
        return 'Unknown step';
    }
  }

  const Audio = () => {
    return (
      <Video
        cloudName="jepras"
        publicId="noisesdot"
        className="fullscreen-bg__video"
        poster="false"
        autoPlay
        loop
        style={{ display: 'none' }}
      />
    );
  };

  return (
    <>
      {getPlacesStepContent(activePlacesStep)}
      <Audio />
    </>
  );
};

export default Places;
