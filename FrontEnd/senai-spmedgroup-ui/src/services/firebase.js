import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATjOPNKqFSGN6n8kCjDizq9J2xNDp8g7M",
    authDomain: "spmedicalgroupenzo.firebaseapp.com",
    databaseURL: "https://spmedicalgroupenzo.firebaseio.com",
    projectId: "spmedicalgroupenzo",
    storageBucket: "spmedicalgroupenzo.appspot.com",
    messagingSenderId: "175908892872",
    appId: "1:175908892872:web:6a72f906fbf1cb1f"
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;

  