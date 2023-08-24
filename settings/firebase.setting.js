// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDohr07exlc1gV9g1ICVA6KnTLTTvSKFm4",
  authDomain: "facepal-de84f.firebaseapp.com",
  projectId: "facepal-de84f",
  storageBucket: "facepal-de84f.appspot.com",
  messagingSenderId: "769520005324",
  appId: "1:769520005324:web:3ba4c7d9cf3eb7c0215269"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);

export { authentication,db }