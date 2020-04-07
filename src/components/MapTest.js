import React, { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";
import { FormContext } from "../contexts/FormContext";
import getMapOptions from "../assets/getMapOptions";

const MapTest = () => {
  const { addLocation } = useContext(FormContext);
  const [value, setValue] = useState("");
  const [defaultMap] = useState({
    center: {
      lat: 48.8583701,
      lng: 2.2922926
    },
    zoom: 18
  });

  const handleSubmit = event => {
    console.log("A name was submitted: " + value);
    event.preventDefault();
    fetchApi();
  };

  const fetchApi = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE `
    )
      .then(res => res.json())
      .then(data => {
        const newLocation = {
          name: value,
          location: data.results[0].geometry.location
        };
        console.log("newlocation", newLocation);
        addLocation(newLocation);
      });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE" }}
        defaultCenter={defaultMap.center}
        defaultZoom={defaultMap.zoom}
        options={getMapOptions}
      >
        <div className="button-placement step-one">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default MapTest;
