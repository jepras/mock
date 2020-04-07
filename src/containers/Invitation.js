import React, { useContext } from "react";
import { StepContext } from "../contexts/StepContext";

const Invitation = () => {
  const { handleNext } = useContext(StepContext);
  return (
    <div>
      <p>invitation</p>
      <button className="button" color="primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Invitation;
