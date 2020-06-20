import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FormContext } from '../contexts/FormContext';
import { ArchitectContext } from '../contexts/ArchitectContext';
import SelectForm from '../components/SelectForm';
import InputForm from '../components/InputForm';

/* import steps */

const ArchitectContent = () => {
  const { submitData, submit } = useContext(FormContext);

  const { activeArchitectStep } = useContext(ArchitectContext);
  console.log('current step: ', activeArchitectStep);

  const MoveOn = () => {
    return (
      <div className="box-3">
        {submit ? (
          <Link to="end">
            <div className="btn btn-three" style={{ left: '18%' }}>
              <span>See MOCK</span>
            </div>
          </Link>
        ) : (
          <div
            className="btn btn-three"
            style={{ left: '18%' }}
            onClick={submitData}
          >
            <span>Submit</span>
          </div>
        )}
      </div>
    );
  };

  function getArchitectStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                What are the most basic values a society should have?
                <SelectForm childInput="basicvalues" next="architect" />
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                (UNDER DEVELOPMENT) Can you think of current examples of those
                values? - Just press submit.
                <SelectForm childInput="colour" next="architect" />
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                If you could add a magic ingredient for human behaviour, what
                would it be?
                <InputForm childInput="magic" next="architect" />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div style={{ top: '70vh' }} className="center-div-mission">
              <div className="absolute mission-overlay content">
                Let's continue
                <MoveOn />
              </div>
            </div>
          </>
        );

      default:
        return 'Unknown step';
    }
  }

  return (
    <div className="experience-container" style={{ zIndex: '1' }}>
      {getArchitectStepContent(activeArchitectStep)}
    </div>
  );
};

export default ArchitectContent;
