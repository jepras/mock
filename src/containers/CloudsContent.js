import React, { useContext } from 'react';
import { CloudsContext } from '../contexts/CloudsContext';

import SelectForm from '../components/SelectForm';

const CloudsContent = () => {
  const { activeCloudStep } = useContext(CloudsContext);

  function getCloudStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70vh' }}>
              <div className="absolute mission-overlay content">
                Which 3 characteristics/values do you appreciate most in the
                people you are with?
                <SelectForm childInput="characteristics" />
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
                <SelectForm childInput="role" />
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
              <SelectForm childInput="gender" />
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

export default CloudsContent;
