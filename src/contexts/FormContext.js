import React, { createContext, useState } from 'react';
import firebase from '../config/fire';

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [fading, setFading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [user, setUser] = useState({
    name: 'from context',
    /* input: '',
    colour: '',
    basicvalues: '',
    order: { first: '', second: '' }, */
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

  const submitData = () => {
    const db = firebase.firestore();

    db.collection('submissions')
      .get()

      .then((snap) => {
        var size = snap.size + 1; // will return the collection size

        console.log('size: ', size);

        db.collection('submissions')
          /* add with whatever input */
          /* .add(user) */

          /* for prod, add properly */
          .add({
            ...user,
            age: user.age.value.value,
            attribute: [
              user.attribute.value[0].value,
              user.attribute.value[1].value,
              user.attribute.value[2].value,
            ],
            basicvalues: [
              user.basicvalues.value[0].value,
              user.basicvalues.value[1].value,
              user.basicvalues.value[2].value,
            ],
            characteristics: [
              user.characteristics.value[0].value,
              user.characteristics.value[1].value,
              user.characteristics.value[2].value,
            ],
            color: { background: user.colour.value.value },
            colourAttributes: user.colourAttributes.value.value,
            label: user.name,
            location: [
              location.location1.name,
              location.location2.name,
              location.location3.name,
            ],
            role: user.role.value.value,
            gender: user.gender.value.value,
            magic: user.magic,
            unique: user.unique,
            unsatisfied: [
              user.unsatisfied.value[0].value,
              user.unsatisfied.value[1].value,
              user.unsatisfied.value[2].value,
            ],
            with: user.with,
            id: size,
          })
          .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch(function (error) {
            console.error('Error adding document: ', error);
          });

        console.log('db size: ', size);
      })

      .catch(function (error) {
        console.error("couldn't connect to database ", error);
      });

    setSubmit(true);
    console.log('adding user to database', user);
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
        fading,
        setFading,
        submitData,
        submit,
        setSubmit,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
