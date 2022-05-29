// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBLSLKK8GRn4tmiluBRvLrJTjsoqzKQj8w',
  authDomain: 'ddonation-app.firebaseapp.com',
  projectId: 'ddonation-app',
  storageBucket: 'ddonation-app.appspot.com',
  messagingSenderId: '195450366634',
  appId: '1:195450366634:web:772277ea63c07ee18dfed3',
  measurementId: 'G-6T22524FGC',
};

let app;

// Initialize Firebase
if (!firebase.getApps().length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

export default app;
