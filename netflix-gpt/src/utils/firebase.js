// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Mc7Kh-sBYFgYY8sj0LqQCdQbQgyM13U",
  authDomain: "netflixgpt-8375d.firebaseapp.com",
  projectId: "netflixgpt-8375d",
  storageBucket: "netflixgpt-8375d.appspot.com",
  messagingSenderId: "275550905784",
  appId: "1:275550905784:web:cdfde5b72b818107715b4d",
  measurementId: "G-BYL78DG9D5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
