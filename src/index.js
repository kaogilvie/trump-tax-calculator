// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN1YFg5ZeM6Hnb8v4yE2gNv4LQES0onfI",
  authDomain: "trump-tax-calculator.firebaseapp.com",
  projectId: "trump-tax-calculator",
  storageBucket: "trump-tax-calculator.appspot.com",
  messagingSenderId: "797812164845",
  appId: "1:797812164845:web:c70b630ba1d876998564e4",
  measurementId: "G-V5YN288KNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
