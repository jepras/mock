import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

/* import steps */
import Intro from '../containers/Intro';
import Invitation from '../containers/Invitation';
import MissionStart1 from '../containers/MissionStart1';
import MissionStart2 from '../containers/MissionStart2';
import Place1 from '../containers/Place1';
import Place2 from '../containers/Place2';
import Place3 from '../containers/Place3';
import Place4 from '../containers/Place4';
import Clouds1 from '../containers/Clouds1';

const Experience = () => {
  const { activeStep } = useContext(StepContext);
  console.log('current step: ', activeStep);

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
        return <Place4 />;
      case 8:
        return <Clouds1 />;

      default:
        return 'Unknown step';
    }
  }

  return (
    <div className="experience-container">
      {getStepContent(activeStep)}
      {/* <div className="user-context">
        <p>form context</p>
        {JSON.stringify(user)}
        <p>location</p>
        {JSON.stringify(location)}
      </div> */}
    </div>
  );

  // OLD LOOPING STEPPER
  // return (
  //   <div>
  //     {/* loop through steps */}
  //     {steps.map((label, index) => (
  //       /* display block for current step, none for rest */
  //       <div
  //         key={label}
  //         style={
  //           index === activeStep ? { display: "block" } : { display: "none" }
  //         }
  //         /* set vw & vh to 100 */
  //         className="experience-container"
  //       >
  //         {/* show step content */}
  //         <div key={label}>{getStepContent(index)}</div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Experience;
