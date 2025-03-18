// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASRkFco6nzUgO3nYRqBF4UFMCH6K4NblM",
  authDomain: "sumativa20-e05bc.firebaseapp.com",
  projectId: "sumativa20-e05bc",
  storageBucket: "sumativa20-e05bc.firebasestorage.app",
  messagingSenderId: "1048694203295",
  appId: "1:1048694203295:web:8300d54d629778d5be53aa",
  measurementId: "G-C9KBQ90ZGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);