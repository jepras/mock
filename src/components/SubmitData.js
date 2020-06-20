
import React from 'react';

export default class SubmitDataComponent extends React.Component {
  render() {
    return const submitData = () => {
        const db = firebase.firestore();
        db.collection('submissionstest').add(user);
      };
  }
}
