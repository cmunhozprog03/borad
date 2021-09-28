import firebase from "firebase/app";

import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyDUAisJCctBpADgkJb7Q6dopko-O6b3a5I",
  authDomain: "boardapp-4002d.firebaseapp.com",
  projectId: "boardapp-4002d",
  storageBucket: "boardapp-4002d.appspot.com",
  messagingSenderId: "910830258649",
  appId: "1:910830258649:web:40cbc36f905fd4811331c8",
  measurementId: "G-3J5BW12K9W"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
