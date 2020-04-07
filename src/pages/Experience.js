import React, { useContext } from "react";
import { StepContext } from "../contexts/StepContext";

/* import steps */
import Intro from "../containers/Intro";
import Invitation from "../containers/Invitation";
import MissionStart1 from "../containers/MissionStart1";
import MissionStart2 from "../containers/MissionStart2";
import Place1 from "../containers/Place1";
import Place2 from "../containers/Place2";
import Place3 from "../containers/Place3";
import End from "../containers/End";

const Experience = () => {
  const { steps, activeStep } = useContext(StepContext);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Intro />;
      case 1:
        return <Invitation />;
      case 2:
        return <MissionStart1 />;
      case 3:
        return <MissionStart2 />;
      case 4:
        return <Place1 />;
      case 5:
        return <Place2 />;
      case 6:
        return <Place3 />;
      case 7:
        return <End />;
      default:
        return "Unknown step";
    }
  }

  return (
    <div>
      {/* loop through steps */}
      {steps.map((label, index) => (
        /* display block for current step, none for rest */
        <div
          key={label}
          style={
            index === activeStep ? { display: "block" } : { display: "none" }
          }
          /* set vw & vh to 100 */
          className="experience-container"
        >
          {/* show step content */}
          <div key={label}>{getStepContent(index)}</div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
