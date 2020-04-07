import React, { useContext } from "react";
import { StepContext } from "../contexts/StepContext";

const MissionStart1 = () => {
  const { handleNext } = useContext(StepContext);
  return (
    <div>
      <p>MissionStart1</p>
      <button className="button" color="primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default MissionStart1;
