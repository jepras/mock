import React, { createContext, useState } from 'react';

export const VisionaryContext = createContext();

const VisionaryContextProvider = (props) => {
  const [activeVisionaryStep, setActiveVisionaryStep] = useState(0);
  const steps = getSteps();

  const handleNextVisionaryStep = (state) => {
    setActiveVisionaryStep(
      (prevActiveVisionaryStep) => prevActiveVisionaryStep + 1
    );
  };

  function getSteps() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  }

  return (
    <VisionaryContext.Provider
      value={{
        steps,
        activeVisionaryStep,
        handleNextVisionaryStep,
      }}
    >
      {props.children}
    </VisionaryContext.Provider>
  );
};

export default VisionaryContextProvider;
