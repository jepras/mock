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
        console.log('user: ', user);

        /* if (user.age) { */
        db.collection('submissions')
          /* add with whatever input */
          /* .add(user) */

          /* for prod, add properly */
          .add({
            ...user,
            age: user.age ? user.age.value.value : 'none',
            attribute: user.attribute.value[0]
              ? [
                  user.attribute.value[0].value,
                  user.attribute.value[1].value,
                  user.attribute.value[2].value,
                ]
              : ['no', 'no', 'no'],
            basicvalues: [
              user.basicvalues.value[0].value,
              user.basicvalues.value[1].value,
              user.basicvalues.value[2].value,
            ],
            presentvalues: [
              user.presentvalues.value[0].value,
              user.presentvalues.value[1].value,
              user.presentvalues.value[2].value,
            ],
            characteristics: user.characteristics.value[0]
              ? [
                  user.characteristics.value[0].value,
                  user.characteristics.value[1].value,
                  user.characteristics.value[2].value,
                ]
              : ['no', 'no', 'no'],
            color: user.colour.value
              ? { background: user.colour.value.value }
              : { background: 'none' },
            colourAttributes: user.colourAttributes
              ? user.colourAttributes.value.value
              : 'none',
            label: user.name ? user.name : 'no label',
            location: location.location1
              ? [
                  location.location1.name,
                  location.location2.name,
                  location.location3.name,
                ]
              : ['no', 'no', 'no'],
            role: user.role.value ? user.role.value.value : 'none',
            gender: user.gender.value ? user.gender.value.value : 'none',
            magic: user.magic ? user.magic : 'none',
            unique: user.unique ? user.unique : 'none',
            unsatisfied: user.unsatisfied
              ? [
                  user.unsatisfied.value[0].value,
                  user.unsatisfied.value[1].value,
                  user.unsatisfied.value[2].value,
                ]
              : ['no', 'no', 'no'],
            with: user.with ? user.with : 'none',
            id: size,
          })
          .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch(function (error) {
            console.error('Error adding document: ', error);
          });
        /* } else {
          db.collection('submissions').add(user);
        } */
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
