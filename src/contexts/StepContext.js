import React, { createContext, useState } from 'react';

export const StepContext = createContext();

const StepContextProvider = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeMissionStep, setActiveMissionStep] = useState(0);
  const [activePlaceStep, setActivePlaceStep] = useState(0);
  const steps = getSteps();

  const handleNext = (state) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log('whats in state?', state);
  };

  const handleNextMissionStep = (state) => {
    setActiveMissionStep((prevActiveMissionStep) => prevActiveMissionStep + 1);
  };
  const handleNextPlaceStep = (state) => {
    setActivePlaceStep((prevActivePlaceStep) => prevActivePlaceStep + 1);
  };

  function getSteps() {
    return [
      'First page',
      'Second page',
      'Third page',
      'Fourth page',
      'Fifth page',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];
  }

  return (
    <StepContext.Provider
      value={{
        steps,
        activeStep,
        activePlaceStep,
        activeMissionStep,
        handleNext,
        handleNextMissionStep,
        handleNextPlaceStep,
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};

export default StepContextProvider;
