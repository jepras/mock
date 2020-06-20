import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { StepContext } from '../contexts/StepContext';
import { FormContext } from '../contexts/FormContext';

import getMapOptions from '../assets/getMapOptions';
import MapForm from '../components/MapForm';

import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';

/* second */
const Place3 = () => {
  const { location } = useContext(FormContext);
  const { activePlaceStep } = useContext(StepContext);

  function getPlaceStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="center-div-mission" style={{ top: '60%' }}>
            <div className="absolute mission-overlay content">
              Take a look around. Who are you with?
              <InputForm childInput="with" next="place" />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="center-div-mission" style={{ top: '60%' }}>
            <div className="absolute mission-overlay content">
              Which 3 attributes describe your feeling at this place best?
              <SelectForm childInput="attribute" next="place" />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="center-div-mission" style={{ top: '60%' }}>
            <div className="absolute mission-overlay content">
              At which geographical location did you last feel you shared common
              interests & beliefs with the people around you?
              <MapForm childInput="shared" phase="place" />
            </div>
          </div>
        );

      default:
        return;
    }
  }

  const [defaultMap] = useState({
    zoom: 18,
  });

  const mapComponent = (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE',
      }}
      center={location.location2[0].location}
      zoom={defaultMap.zoom}
      options={getMapOptions}
    ></GoogleMapReact>
  );

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {mapComponent}
      {getPlaceStepContent(activePlaceStep)}
    </div>
  );
};

export default Place3;
