
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC8mBSqev5I8z_5R3NqD3-9EA_EiL7EFrM",
    authDomain: "lekhart-4d613.firebaseapp.com",
    projectId: "lekhart-4d613",
    storageBucket: "lekhart-4d613.appspot.com",
    messagingSenderId: "298758164043",
    appId: "1:298758164043:web:702f2bc8a6e521884507ce",
    measurementId: "G-72VGG7RP1H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };