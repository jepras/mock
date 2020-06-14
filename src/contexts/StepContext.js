import React, { createContext, useState } from 'react';

export const StepContext = createContext();

const StepContextProvider = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeArchitectStep, setActiveArchitectStep] = useState(0);
  const [activeVisionaryStep, setActiveVisionaryStep] = useState(0);
  const [activeMissionStep, setActiveMissionStep] = useState(0);
  const [activePlaceStep, setActivePlaceStep] = useState(0);
  const steps = getSteps();

  /* const handleNext = (state) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log('whats in state?', state);
  }; */
  const handleNext = (state) => {
    setActiveStep(activeStep + 1);
  };

  const handleNextArchitectStep = (state) => {
    setActiveArchitectStep(
      (prevActiveArchitectStep) => prevActiveArchitectStep + 1
    );
  };
  const handleNextVisionaryStep = (state) => {
    setActiveVisionaryStep(
      (prevActiveVisionaryStep) => prevActiveVisionaryStep + 1
    );
  };
  const handleNextMissionStep = (state) => {
    setActiveMissionStep((prevActiveMissionStep) => prevActiveMissionStep + 1);
  };
  const handleNextPlaceStep = (state) => {
    setActivePlaceStep((prevActivePlaceStep) => prevActivePlaceStep + 1);
  };

  function getSteps() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  }

  return (
    <StepContext.Provider
      value={{
        steps,
        activeStep,
        activePlaceStep,
        activeMissionStep,
        activeVisionaryStep,
        activeArchitectStep,

        handleNext,
        handleNextArchitectStep,
        handleNextVisionaryStep,
        handleNextMissionStep,
        handleNextPlaceStep,
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};

export default StepContextProvider;
