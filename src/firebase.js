import firebase from 'firebase'
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBFaVIPFVzEvx_jLeoVr2wDUsulVtOy7gg",
    authDomain: "twitter-clone-b2595.firebaseapp.com",
    projectId: "twitter-clone-b2595",
    storageBucket: "twitter-clone-b2595.appspot.com",
    messagingSenderId: "1081614954992",
    appId: "1:1081614954992:web:90ad257d83f98faca4ed35",
    measurementId: "G-04PH61LNK8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()

  export default db