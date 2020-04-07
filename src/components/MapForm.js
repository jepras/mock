import React, { useContext, useState } from "react";
import { FormContext } from "../contexts/FormContext";

const MapForm = () => {
  const { addLocation } = useContext(FormContext);
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    console.log("A name was submitted: " + value);
    event.preventDefault();
    fetchGeo();
  };

  const fetchGeo = () => {
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
  );
};

export default MapForm;
