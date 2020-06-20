import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyAktPTXbNaViA9PJLCj5gaQX5uP3jeAjM0',
  authDomain: 'mock-14d26.firebaseapp.com',
  databaseURL: 'https://mock-14d26.firebaseio.com',
  projectId: 'mock-14d26',
  storageBucket: 'mock-14d26.appspot.com',
  messagingSenderId: '582954439907',
  appId: '1:582954439907:web:18325a0f36cc90c3fbe1d6',
};
firebase.initializeApp(config);

/* export const auth = firebase.auth;
export const db = firebase.database();
export const firestore = firebase.firestore(); */

export default firebase;
