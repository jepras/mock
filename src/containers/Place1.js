import React, { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";

import { StepContext } from "../contexts/StepContext";
import { FormContext } from "../contexts/FormContext";

import getMapOptions from "../assets/getMapOptions";

/* location.locations[0].location */

const Place1 = () => {
  const { handleNext } = useContext(StepContext);
  const { location } = useContext(FormContext);
  console.log("location", location);

  const [defaultMap] = useState({
    zoom: 18,
  });

  const mapComponent = (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE",
      }}
      center={location.location1[0].location}
      zoom={defaultMap.zoom}
      options={getMapOptions}
    ></GoogleMapReact>
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {mapComponent}
      <div className="button-placement step-one">
        <p>Place1</p>
        <button className="button" color="primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Place1;
