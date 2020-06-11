import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import { StepContext } from '../contexts/StepContext';
import './InputForm.css';

const MapForm = () => {
  const { addLocation } = useContext(FormContext);
  const { handleNext } = useContext(StepContext);
  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(null);

  const handleSubmit = (event) => {
    console.log('A name was submitted: ' + value);
    event.preventDefault();
    fetchGeo();
    setClicked(true);
    handleNext();
  };

  const fetchGeo = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE `
    )
      .then((res) => res.json())
      .then((data) => {
        const newLocation = {
          name: value,
          location: data.results[0].geometry.location,
        };
        console.log('newlocation', newLocation);
        addLocation(newLocation);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cursor">
        <input
          autoFocus
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="input-styling"
        />
      </div>

      <div className="box-3">
        <div className="btn btn-three">
          {clicked ? <span>Submitted</span> : <span>Enter</span>}
        </div>
      </div>
    </form>
  );
};

export default MapForm;
