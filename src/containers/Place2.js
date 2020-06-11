import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { StepContext } from '../contexts/StepContext';
import { FormContext } from '../contexts/FormContext';

import getMapOptions from '../assets/getMapOptions';
import MapForm from '../components/MapForm';

const Place2 = () => {
  const { handleNext } = useContext(StepContext);
  const { location } = useContext(FormContext);

  const [defaultMap] = useState({
    zoom: 18,
  });

  /* the first  */
  const mapComponent = (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE',
      }}
      center={location.location1[0].location}
      zoom={defaultMap.zoom}
      options={getMapOptions}
    ></GoogleMapReact>
  );

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {mapComponent}
      <div className="center-div-mission" style={{ top: '70%' }}>
        <div className="absolute mission-overlay content">
          Where did you last feel a strong sense of belonging?
          <MapForm />
        </div>
      </div>
    </div>
  );
};

export default Place2;
