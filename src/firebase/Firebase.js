// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKK8GbGL44sELTxyMbVPiMd5zI37aYY6o",
  authDomain: "recipe-app-95fe3.firebaseapp.com",
  projectId: "recipe-app-95fe3",
  storageBucket: "recipe-app-95fe3.appspot.com",
  messagingSenderId: "592252146681",
  appId: "1:592252146681:web:2711602c4531b7b6946328",
  measurementId: "G-2N6F91QRN4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firebasedb = getFirestore(app);

export default app;