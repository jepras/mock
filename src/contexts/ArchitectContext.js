import React, { createContext, useState } from 'react';

export const ArchitectContext = createContext();

const ArchitectContextProvider = (props) => {
  const [activeArchitecttep, setActiveArchitecttep] = useState(0);
  const steps = getSteps();

  const handleNextArchitecttep = (state) => {
    setActiveArchitecttep(
      (prevActiveArchitecttep) => prevActiveArchitecttep + 1
    );
  };

  function getSteps() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  }

  return (
    <ArchitectContext.Provider
      value={{
        steps,
        activeArchitecttep,
        handleNextArchitecttep,
      }}
    >
      {props.children}
    </ArchitectContext.Provider>
  );
};

export default ArchitectContextProvider;
