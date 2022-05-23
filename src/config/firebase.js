import { initializeApp } from "firebase/app";
import {} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNRnL41RhXhyiJi75zmKT6bBc6EtsSk_Y",
  authDomain: "foodapp-reactnative-41577.firebaseapp.com",
  projectId: "foodapp-reactnative-41577",
  storageBucket: "foodapp-reactnative-41577.appspot.com",
  messagingSenderId: "633443962865",
  appId: "1:633443962865:web:f0291a21aec35dda5c7e50",
};

// let app;

// if (!firebase.apps.length) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
const app = initializeApp(firebaseConfig);

const db = getFirestore();
// const auth = firebase.auth();

export { db };
