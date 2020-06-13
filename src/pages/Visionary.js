import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

/* import steps */

const Visionary = () => {
  const { activeVisionaryStep } = useContext(StepContext);
  console.log('current step: ', activeVisionaryStep);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return;

      default:
        return 'Unknown step';
    }
  }

  return (
    <div className="experience-container">
      {getStepContent(activeVisionaryStep)}
    </div>
  );
};

export default Visionary;
