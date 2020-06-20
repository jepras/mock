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

  const MoveOn = () => {
    return (
      <div className="box-3">
        {submit ? (
          <Link to="end">
            <div style={{ color: '#ffffff' }}>
              <span>Build the MOCK and return back to reality</span>
            </div>
          </Link>
        ) : (
          <div onClick={submitData}>
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
            <div className="center-div-mission" style={{ top: '60vh' }}>
              <div className="absolute mission-overlay content">
                What colour is your new society?
                <SelectForm childInput="colour" next="architect" />
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="center-div-mission" style={{ top: '60vh' }}>
              <div className="absolute mission-overlay content">
                What does the colour stand for?{' '}
                <SelectForm childInput="colourAttributes" next="architect" />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="center-div-mission" style={{ top: '60vh' }}>
              <div className="absolute mission-overlay content">
                What are the 3 most basic values our future society should have?
                <SelectForm childInput="basicvalues" next="architect" />
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="center-div-mission" style={{ top: '60vh' }}>
              <div className="absolute mission-overlay content">
                Which 3 values do you see most present in society right now?
                <SelectForm childInput="presentvalues" next="architect" />
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="center-div-mission" style={{ top: '60vh' }}>
              <div className="absolute mission-overlay content">
                If you could add a magic ingredient for our future society, what
                would it be?
                <InputForm childInput="magic" next="architect" />
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div style={{ top: '60vh' }} className="center-div-mission">
              <div className="absolute mission-overlay content">
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
