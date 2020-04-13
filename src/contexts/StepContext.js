import React, { createContext, useState } from "react";

export const StepContext = createContext();

const StepContextProvider = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (state) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log("whats in state?", state);
  };

  function getSteps() {
    return [
      "First page",
      "Second page",
      "Third page",
      "Fourth page",
      "Fifth page",
      "6",
      "7",
      "8",
    ];
  }

  return (
    <StepContext.Provider value={{ steps, activeStep, handleNext }}>
      {props.children}
    </StepContext.Provider>
  );
};

export default StepContextProvider;
