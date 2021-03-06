import React, { createContext, useState } from 'react';

export const CloudsContext = createContext();

const CloudsContextProvider = (props) => {
  const [activeCloudStep, setActiveCloudStep] = useState(0);
  const steps = getSteps();

  const handleNextCloudStep = (state) => {
    setActiveCloudStep((prevActiveCloudStep) => prevActiveCloudStep + 1);
  };

  function getSteps() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  }

  return (
    <CloudsContext.Provider
      value={{
        steps,
        activeCloudStep,
        handleNextCloudStep,
      }}
    >
      {props.children}
    </CloudsContext.Provider>
  );
};

export default CloudsContextProvider;
