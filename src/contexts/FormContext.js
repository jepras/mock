import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [user, setUser] = useState({
    name: '',
    input: '',
    color: 'blue',
    order: { first: '', second: '' },
  });

  const [location, setLocation] = useState({
    location1: [{ name: 'unknown', location: { lat: 10, lng: 20 } }],
    location2: [{ name: 'unknown', location: { lat: 10, lng: 20 } }],
    location3: [{ name: 'unknown', location: { lat: 10, lng: 20 } }],
  });

  const addUser = (name) => {
    setUser({ ...user, name });
  };

  const addInput = (value, childInput) => {
    setUser({ ...user, [childInput]: value });
  };

  const addMultiInput = (value, childInput) => {
    setUser({ ...user, [childInput]: value });
  };

  /* replacing location info */
  const addLocation = (newLocation) => {
    if (location.location1[0].name === 'unknown') {
      console.log('deleting and adding new ');
      setLocation({ ...location, location1: [newLocation] });
    } else if (location.location2[0].name === 'unknown') {
      console.log('adding SECOND extra');
      setLocation({ ...location, location2: [newLocation] });
    } else if (location.location3[0].name === 'unknown') {
      console.log('adding THIRD extra');
      setLocation({ ...location, location3: [newLocation] });
    }
  };

  return (
    <FormContext.Provider
      value={{
        addUser,
        user,
        addLocation,
        location,
        addInput,
        setUser,
        addMultiInput,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
