// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZkYvZLPOQY01OkvNXhNERB3xX0ng36rM",
  authDomain: "twitter-287c7.firebaseapp.com",
  projectId: "twitter-287c7",
  storageBucket: "twitter-287c7.firebasestorage.app",
  messagingSenderId: "1028030406388",
  appId: "1:1028030406388:web:d2a46b75cfa64ef5f8c8a1",
  measurementId: "G-DNY6V2QRX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
