import firebase from "firebase";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZko-oDi7SbfHT5v08Lu0iGnW7_TOFBfw",
  authDomain: "perfect-day-tracker.firebaseapp.com",
  projectId: "perfect-day-tracker",
  storageBucket: "perfect-day-tracker.appspot.com",
  messagingSenderId: "14372654234",
  appId: "1:14372654234:web:8a893edf20768fa7bae323",
  measurementId: "G-R56356493J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore();

export default firebase;

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
