import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { FormContext } from '../contexts/FormContext';

import getMapOptions from '../assets/getMapOptions';
import InputForm from '../components/InputForm';

/* third */
const Place4 = () => {
  const { location } = useContext(FormContext);

  const [defaultMap] = useState({
    zoom: 18,
  });

  const mapComponent = (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE',
      }}
      center={location.location3[0].location}
      zoom={defaultMap.zoom}
      options={getMapOptions}
    ></GoogleMapReact>
  );

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {mapComponent}
      <div className="center-div-mission" style={{ top: '60%' }}>
        <div className="absolute mission-overlay content">
          We travel with high speed. Make sure you take a few minutes to settle
          in before you proceed - take a look around. What do people do in the
          picture you take of this place?
          <InputForm childInput="people" next="normal" />
        </div>
      </div>
    </div>
  );
};

export default Place4;
