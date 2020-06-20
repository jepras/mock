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
    firebase.firestore().collection('submissionstest'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  console.log(loading, error);

  if (values) {
    values.map((doc) =>
      nodesArr.push({
        ...doc,

        title: 'name: ' + doc.name + '. id: ' + doc.id,
      })
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
      if (i < len) {
        edgesArr.push({
          from: i,
          to: i + 1,
        });
      } else {
        console.log('one is out: ', i);
        edgesArr.push({
          from: i,
          to: 0,
        });
      }
    }
  }

  return (
    <>
      <VisGraph nodesArr={nodesArr} edgesArr={edgesArr} />
    </>
  );
};

export default ShowGraph;
