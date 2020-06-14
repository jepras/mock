import React, { createContext, useState } from 'react';

export const VisionaryContext = createContext();

const VisionaryContextProvider = (props) => {
  const [activeVisionarytep, setActiveVisionarytep] = useState(0);
  const steps = getSteps();

  const handleNextVisionarytep = (state) => {
    setActiveVisionarytep(
      (prevActiveVisionarytep) => prevActiveVisionarytep + 1
    );
  };

  function getSteps() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  }

  return (
    <VisionaryContext.Provider
      value={{
        steps,
        activeVisionarytep,
        handleNextVisionarytep,
      }}
    >
      {props.children}
    </VisionaryContext.Provider>
  );
};

export default VisionaryContextProvider;
