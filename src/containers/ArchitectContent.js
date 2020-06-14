import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloudsContext } from '../contexts/CloudsContext';
import { FormContext } from '../contexts/FormContext';

import SelectForm from '../components/SelectForm';

const ArchitectContent = () => {
  const { user } = useContext(FormContext);
  const { activeCloudStep } = useContext(CloudsContext);
  const [clicked] = useState(null);
  console.log('user role', user);

  const MoveOn = () => {
    if (user.role.value.value === 'visionary') {
      return (
        <div className="box-3">
          <Link to="visionary">
            <div className="btn btn-three">
              {clicked ? <span>Submitted</span> : <span>Enter</span>}
            </div>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="box-3">
          <Link to="architect">
            <div className="btn btn-three">
              {clicked ? <span>Submitted</span> : <span>Enter</span>}
            </div>
          </Link>
        </div>
      );
    }
  };

  function getCloudStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                Which 3 characteristics/values do you appreciate most in the
                people you are with?
                <SelectForm childInput="characteristics" next="architect" />
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                Which role fits you best?
                <SelectForm childInput="role" next="architect" />
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <div className="center-div-mission" style={{ top: '70vh' }}>
            <div className="absolute mission-overlay content">
              We are looking for mixed-gender Inter Virtual Experience. Before
              you go off, share with us who you are:
              <SelectForm childInput="gender" next="architect" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="center-div-mission" style={{ top: '70vh' }}>
            <div className="absolute mission-overlay content">
              Let's continue
              <MoveOn />
            </div>
          </div>
        );

      default:
        return;
    }
  }

  const Content = () => {
    return <>{getCloudStepContent(activeCloudStep)}</>;
  };

  return <Content />;
};

export default ArchitectContent;
