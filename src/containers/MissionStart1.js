import React, { useContext, useState } from 'react';
import { StepContext } from '../contexts/StepContext';

import { Video } from 'cloudinary-react';

import noise from '../assets/media/aud/noise.wav';
import breath from '../assets/media/aud/breath.wav';
/* import jen2 from '../assets/media/aud/jen2.wav';
  import jen3 from '../assets/media/aud/jen3.wav'; */

import lights from '../assets/media/img/lights.jpg';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';

const MissionStart = () => {
  const [playVideo] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const { handleNext, activeMissionStep } = useContext(StepContext);

  function getMissionStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            {showQuestion ? (
              <div className="center-div-mission" style={{ top: '70%' }}>
                <div className="absolute mission-overlay content">
                  If you are ready to pursue the MOCK, enter your name
                  <InputForm childInput="name" next="mission" />
                </div>
              </div>
            ) : (
              <Video
                cloudName="jepras"
                publicId="Jen_voice_2"
                className="fullscreen-bg__video"
                poster="false"
                autoPlay
                style={{ display: 'none' }}
                onEnded={() => setShowQuestion(true)}
              />
            )}
          </>
        );

      case 1:
        return (
          <>
            <div className="center-div-mission" style={{ top: '70%' }}>
              <div className="absolute mission-overlay content">
                What makes being human unique?
                <InputForm childInput="unique" next="mission" />
              </div>
            </div>
            <Video
              cloudName="jepras"
              publicId="Jen_voice_3"
              className="fullscreen-bg__video"
              poster="false"
              autoPlay
              style={{ display: 'none' }}
            />
          </>
        );

      case 2:
        return (
          <div className="center-div-mission" style={{ top: '70%' }}>
            <div className="absolute mission-overlay content">
              How long have you been an earthling?
              <SelectForm childInput="age" next="mission" />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="center-div-mission" style={{ top: '70%' }}>
            <div className="absolute mission-overlay content">
              If any, which 3 aspects do you miss most in your life recently?
              <SelectForm childInput="unsatisfied" next="normal" />
            </div>
          </div>
        );

      default:
        return;
    }
  }

  const Transition = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="Flicker"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          loop
          onEnded={() => handleNext()}
        />
      </div>
    );
  };

  const Background = () => {
    /* var fadeNumber = ['fade1', 'fade2']; */
    console.log(activeMissionStep);

    return (
      <img
        src={lights}
        alt="lights"
        /* className={fadeNumber[activeMissionStep]} */
        className={`
        ${activeMissionStep === 0 ? 'fade1' : ''}
        ${activeMissionStep === 1 ? 'fade2' : ''}
        ${activeMissionStep === 2 ? 'fade3' : ''}
        ${activeMissionStep === 3 ? 'fade4' : ''}
      `}
      />
    );
  };

  const Content = () => {
    return <>{getMissionStepContent(activeMissionStep)}</>;
  };

  const Audio = () => {
    return (
      <audio
        controls
        autoPlay
        src={breath}
        loop={false}
        style={{ display: 'none' }}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  const Audio2 = () => {
    return (
      <audio controls autoPlay src={noise} loop style={{ display: 'none' }}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  };

  return (
    <div className="experience-container">
      {playVideo === true ? (
        <Transition />
      ) : (
        <>
          <Background />
          <Content />
          <Audio />
          <Audio2 />
        </>
      )}
    </div>
  );
};

export default MissionStart;
