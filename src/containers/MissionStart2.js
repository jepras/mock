import React, { useContext } from "react";
import { StepContext } from "../contexts/StepContext";
import MapForm from "../components/MapForm";

const MissionStart2 = () => {
  const { handleNext } = useContext(StepContext);
  return (
    <div>
      <p>MissionStart2</p>
      <MapForm />
      <button className="button" color="primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default MissionStart2;
