import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FormContext } from '../contexts/FormContext';
import { VisionaryContext } from '../contexts/VisionaryContext';
import SelectForm from '../components/SelectForm';
import InputForm from '../components/InputForm';

import firebase from '../config/fire';

/* import steps */

const VisionaryContent = () => {
  const { user } = useContext(FormContext);
  const { activeVisionaryStep } = useContext(VisionaryContext);
  console.log('current step: ', activeVisionaryStep);

  const submitData = () => {
    const db = firebase.firestore();
    db.collection('submissionstest').add(user);
  };

  const MoveOn = () => {
    return (
      <div className="box-3">
        <button onClick={submitData}>submit</button>
        <Link to="end">
          <div className="btn btn-three" style={{ left: '30%' }}>
            <span>Enter</span>
          </div>
        </Link>
      </div>
    );
  };

  function getVisionaryStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                What colour is your new society?
                <SelectForm childInput="colour" next="visionary" />
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                What does the colour stand for?{' '}
                <InputForm childInput="colourmeaning" next="visionary" />
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                What are the most basic values a society should have?
                <SelectForm childInput="basicvalues" next="visionary" />
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                (UNDER DEVELOPMENT) Can you think of current examples of those
                values? - Just press submit.
                <SelectForm childInput="basicvalues" next="visionary" />
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                If you could add a magic ingredient for human behaviour, what
                would it be?
                <InputForm childInput="magic" next="visionary" />
              </div>
            </div>
          </>
        );
      case 5:
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
    <div className="experience-container">
      {getVisionaryStepContent(activeVisionaryStep)}
    </div>
  );
};

export default VisionaryContent;