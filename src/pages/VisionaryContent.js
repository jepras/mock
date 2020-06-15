import React, { useContext } from 'react';
import { VisionaryContext } from '../contexts/VisionaryContext';
import SelectForm from '../components/SelectForm';
import InputForm from '../components/InputForm';

/* import steps */

const VisionaryContent = () => {
  const { activeVisionaryStep } = useContext(VisionaryContext);
  console.log('current step: ', activeVisionaryStep);

  function getVisionaryStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                What colour is your new society?
                <SelectForm childInput="colour" next="visionary" />
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                What does the colour stand for?{' '}
                <InputForm childInput="colourmeaning" next="visionary" />
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                What are the most basic values a society should have?
                <SelectForm childInput="basicvalues" next="visionary" />
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                Can you think of current examples of those values?
                <SelectForm childInput="basicvalues" next="visionary" />
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                If you could add a magic ingredient for human behaviour, what
                would it be?
                <InputForm childInput="magic" next="visionary" />
              </div>
            </div>
          </>
        );

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

export default VisionaryContent;
