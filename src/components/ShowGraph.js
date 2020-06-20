import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../config/fire';

import VisGraph from './VisGraph';

const ShowGraph = () => {
  /* const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }; */

  var nodesArr = [];
  var edgesArr = [];

  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection('submissions'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  console.log(loading, error);

  if (values) {
    values.map(
      (doc) =>
        nodesArr.push({
          ...doc,

          title:
            'A <b>' +
            doc.gender +
            '</b> named <b>' +
            doc.name +
            '</b> who seems to be a <b>' +
            doc.role +
            '</b>.<br> <b>' +
            doc.name +
            '</b> thinks that what makes humans unique is <b>' +
            doc.unique +
            '</b>.<br> If <b>' +
            doc.name +
            '</b> could choose one magic ingredient to the human behaviour it would be: <b>' +
            doc.magic +
            '</b>. <br>Home is <b>' +
            doc.location[0] +
            '</b>. <br><br>The last place of shared belonging were at <b>' +
            doc.location[1] +
            '</b> with <b>' +
            doc.with +
            '</b> where the feelings were strong of <b>' +
            doc.attribute[0] +
            ', ' +
            doc.attribute[1] +
            ' & ' +
            doc.attribute[2] +
            '</b>.<br>The last place of shared common interests & beliefs were at: <b>' +
            doc.location[2] +
            '</b>, where people were engaging in the human activity of: <b>' +
            doc.people +
            '</b> <br><br> What <b>' +
            doc.name +
            '</b> misses the most recently is <b>' +
            doc.unsatisfied[0] +
            ', ' +
            doc.unsatisfied[1] +
            ' & ' +
            doc.unsatisfied[2] +
            '</b>. Maybe that is related to the 3 things that is appreciated most in <b>' +
            doc.characteristics[0] +
            ', ' +
            doc.characteristics[1] +
            ' & ' +
            doc.characteristics[2] +
            '</b>. <br><br>The 3 most present values in society right now are: <b>' +
            doc.presentvalues[0] +
            ', ' +
            doc.presentvalues[1] +
            ' & ' +
            doc.presentvalues[2] +
            '</b>, but the 3 most important values for our future is: <b>' +
            doc.basicvalues[0] +
            ', ' +
            doc.basicvalues[1] +
            ' & ' +
            doc.basicvalues[2] +
            '</b>.',
        }),
      values.map((doc) => console.log('doc: ', doc.location[1]))
    );
    console.log('values', values);

    var len = nodesArr.length;

    /* for (var i = 0; i < len; i++) {
      edgesArr.push({
        from: getRandomIntInclusive(1, len),
        to: getRandomIntInclusive(1, len),
      });
    } */
    for (var i = 0; i <= len; i++) {
      edgesArr.push({
        from: i,
        to: i + 1,
      });
    }
  }

  console.log('nodes arr: ', nodesArr);

  return (
    <>
      <VisGraph nodesArr={nodesArr} edgesArr={edgesArr} />
    </>
  );
};

export default ShowGraph;
