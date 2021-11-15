import firebase from 'firebase';
 import 'firebase/firestore';

 const firebaseConfig = {
  apiKey: "AIzaSyDP9q2kx5CO5Y4Ti_a4FRVG4C9QOZVzGhM",
  authDomain: "dmi2-4b2ca.firebaseapp.com",
  databaseURL: "https://dmi2-4b2ca-default-rtdb.firebaseio.com",
  projectId: "dmi2-4b2ca",
  storageBucket: "dmi2-4b2ca.appspot.com",
  messagingSenderId: "349273545729",
  appId: "1:349273545729:web:f76a75fca0677cc5ceb400"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  console.info({ firebase });
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db =  firebase.database();
const auth = firebase.auth();

export default{firebase, auth, db}