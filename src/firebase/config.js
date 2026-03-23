// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBBb95eNb_ptx9kbBN4fsB_gKo7dbRCuYI",
  authDomain: "form-data-e1f86.firebaseapp.com",
  databaseURL: "https://form-data-e1f86-default-rtdb.firebaseio.com",
  projectId: "form-data-e1f86",
  storageBucket: "form-data-e1f86.firebasestorage.app",
  messagingSenderId: "46985035437",
  appId: "1:46985035437:web:13b27d4dcf633b02e85024",
  measurementId: "G-2LVC293ZJX"
};

// Initialize Firebase
const app = !getApps().length ?
initializeApp(firebaseConfig): getApps();

export default app;