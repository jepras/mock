import React, { /* useContext */ useState } from 'react';
/* import { StepContext } from '../contexts/StepContext';
 */ import { Video } from 'cloudinary-react';

import SelectForm from '../components/SelectForm';
import CloudsContent from './CloudsContent';
import CloudsContextProvider from '../contexts/CloudsContext';

const Clouds1 = () => {
  const [playVideo, setPlayVideo] = useState(true);
  /* const { activeCloudStep } = useContext(StepContext);

  function getCloudStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div style={{ height: '100vh', width: '100%' }}>
              <div className="center-div-mission" style={{ top: '70%' }}>
                <div className="absolute mission-overlay content">
                  Which 3 characteristics/values do you appreciate most in the
                  people you are with?
                  <SelectForm childInput="characteristics" />
                </div>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70%' }}>
              <div className="absolute mission-overlay content">
                Which role fits you best?
                <SelectForm childInput="role" />
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <div className="center-div-mission" style={{ top: '70%' }}>
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
  } */

  const Transition = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="earthzoom-reverse"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          onEnded={() => setPlayVideo(false)}
        />
      </div>
    );
  };

  const Background = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="clouds"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          /* onEnded={() => setPlayVideo(true)} */
          muted
        />
      </div>
    );
  };

  /* const Content = () => {
    return <>{getCloudStepContent(activeCloudStep)}</>;
  }; */

  const Audio = () => {
    return (
      <Video
        cloudName="jepras"
        publicId="videoplayback"
        className="fullscreen-bg__video"
        poster="false"
        autoPlay
        style={{ display: 'none' }}
        /* onEnded={() => setPlayVideo(true)} */
      />
    );
  };

  return (
    <>
      {playVideo === true ? (
        <Transition />
      ) : (
        <>
          <Background />
          <CloudsContextProvider>
            <CloudsContent />
          </CloudsContextProvider>
          <Audio />
        </>
      )}
    </>
  );
};

export default Clouds1;
