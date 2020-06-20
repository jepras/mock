import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

import { Video } from 'cloudinary-react';
import vand from '../assets/media/aud/vand.wav';
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
      <audio controls autoPlay src={vand} loop style={{ display: 'none' }}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
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
