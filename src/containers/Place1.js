import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { StepContext } from '../contexts/StepContext';
import { FormContext } from '../contexts/FormContext';

import getMapOptions from '../assets/getMapOptions';
import MapForm from '../components/MapForm';

/* the world */
const Place1 = (props) => {
  const { activeStep } = useContext(StepContext);
  const { location } = useContext(FormContext);
  console.log('location & active step', location, activeStep);

  if (activeStep === 2) {
    console.log('hey!', activeStep);
    console.log('props', props);
  }

  const [defaultMap] = useState({
    zoom: 1,
  });

  const mapComponent = (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE',
      }}
      center={{ lat: 10, lng: 20 }}
      zoom={defaultMap.zoom}
      options={getMapOptions}
    ></GoogleMapReact>
  );

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {mapComponent}
      <div className="center-div-mission" style={{ top: '70%' }}>
        <div className="absolute mission-overlay content">
          Where is your current place of residence? Or Where is home?
          <MapForm />
        </div>
      </div>
    </div>
  );
};

export default Place1;
