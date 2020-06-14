import React, { createContext, useState } from 'react';

export const ArchitectContext = createContext();

const ArchitectContextProvider = (props) => {
  const [activeArchitectStep, setActiveArchitectStep] = useState(0);
  const steps = getSteps();

  const handleNextArchitectStep = (state) => {
    setActiveArchitectStep(
      (prevActiveArchitectStep) => prevActiveArchitectStep + 1
    );
  };

  function getSteps() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  }

  return (
    <ArchitectContext.Provider
      value={{
        steps,
        activeArchitectStep,
        handleNextArchitectStep,
      }}
    >
      {props.children}
    </ArchitectContext.Provider>
  );
};

export default ArchitectContextProvider;
