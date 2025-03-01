// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnwOxFce7s7YAy7_GgUbypvnp6iPzgg8A",
    authDomain: "wsjp-79.firebaseapp.com",
    projectId: "wsjp-79",
    databaseURL: "https://wsjp-79-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "wsjp-79.firebasestorage.app",
    messagingSenderId: "1090968888995",
    appId: "1:1090968888995:web:2984ea86fa0c8e58dfc116",
    measurementId: "G-90P5870C66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);