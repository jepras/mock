import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

/* import steps */

const Visionary = () => {
  const { activeVisionaryStep } = useContext(StepContext);
  console.log('current step: ', activeVisionaryStep);

  function getVisionaryStepContent(step) {
    switch (step) {
      case 0:
        return <p>visionary</p>;

      default:
        return 'Unknown step';
    }
  }

  return (
    <div className="experience-container">
      {getVisionaryStepContent(activeVisionaryStep)}
    </div>
  );
};

export default Visionary;
