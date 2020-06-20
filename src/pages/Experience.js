import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

/* import steps */
import Intro from '../containers/Intro';
import Invitation from '../containers/Invitation';
import MissionStart1 from '../containers/MissionStart1';
import MissionStart2 from '../containers/MissionStart2';
import Places from '../containers/Places';
import Clouds1 from '../containers/Clouds1';

const Experience = () => {
  const { activeStep } = useContext(StepContext);
  console.log('current step: ', activeStep);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Intro />;
      case 1:
        return <Invitation />;
      case 2:
        return <MissionStart1 />;
      case 3:
        return <MissionStart2 />;
      case 4:
        return <Places />;

      case 5:
        return <Clouds1 />;

      default:
        return 'Unknown step';
    }
  }

  return (
    <div className="experience-container">{getStepContent(activeStep)}</div>
  );
};

export default Experience;
