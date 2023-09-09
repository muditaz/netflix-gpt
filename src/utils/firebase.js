// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB12QEBCWr0Bs9UCDWmmAsN5Z1u1QklAL0",
  authDomain: "netflixgpt-74b65.firebaseapp.com",
  projectId: "netflixgpt-74b65",
  storageBucket: "netflixgpt-74b65.appspot.com",
  messagingSenderId: "751382377012",
  appId: "1:751382377012:web:8177661170f4985e539061",
  measurementId: "G-V4MBSH4VYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
