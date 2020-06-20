import React, { useContext } from 'react';
import { Video } from 'cloudinary-react';
import { FormContext } from '../contexts/FormContext';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../config/fire';

import InputForm from './InputForm';
import VisGraph from './VisGraph';

const Test = () => {
  const { submitData } = useContext(FormContext);

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  };

  var nodesArr = [];
  var edgesArr = [];

  const MoveOn = () => {
    return (
      <div className="box-3">
        <button onClick={submitData}>submit</button>
      </div>
    );
  };

  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection('submissionstest'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (values) {
    values.map((doc) =>
      nodesArr.push({
        ...doc,

        title: 'name: ' + doc.name + '. id: ' + doc.id,
      })
    );
    console.log('values', values);

    var len = nodesArr.length;

    for (var i = 0; i < len; i++) {
      edgesArr.push({
        from: getRandomIntInclusive(1, len),
        to: getRandomIntInclusive(1, len),
      });
    }
  }

  /* const Background = () => {
    return (
      <div className="fullscreen-bg">
        <Video
          cloudName="jepras"
          publicId="breeze-fade"
          className="fullscreen-bg__video"
          poster="false"
          autoPlay
          muted
        />
      </div>
    );
  }; */

  const Content = () => {
    return (
      <>
        <div className="center-div-mission" style={{ top: '70%' }}>
          <div className="absolute mission-overlay content">
            What makes humans unique?
            <InputForm childInput="unique" next="mission" />
          </div>
        </div>
        <VisGraph nodesArr={nodesArr} edgesArr={edgesArr} />
        <MoveOn />
        <div>
          <p>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            {values && (
              <span>
                Collection:{' '}
                {values.map((doc) => (
                  <React.Fragment key={doc.id}>
                    {JSON.stringify(doc)},{' '}
                  </React.Fragment>
                ))}
              </span>
            )}
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      {/* <Background /> */}
      <Content />
    </>
  );
};

export default Test;
