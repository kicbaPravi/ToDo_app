import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGGol8Ub-sVDTCs8QNmFNuwBQ8s9_jaYo",
  authDomain: "to-do-app-125e5.firebaseapp.com",
  databaseURL: "https://to-do-app-125e5.firebaseio.com",
  projectId: "to-do-app-125e5",
  storageBucket: "to-do-app-125e5.appspot.com",
  messagingSenderId: "423470319553",
  appId: "1:423470319553:web:5c4b5b846d3be639d9d140",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
