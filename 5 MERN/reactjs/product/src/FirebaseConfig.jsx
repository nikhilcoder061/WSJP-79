// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfsRkn-k9mqy59zXYjLmLUTJleyTN5W2g",
  authDomain: "userlogin-a2504.firebaseapp.com",
  projectId: "userlogin-a2504",
  storageBucket: "userlogin-a2504.firebasestorage.app",
  messagingSenderId: "438465660954",
  appId: "1:438465660954:web:23efb42653665b20b229a3",
  measurementId: "G-DSW0Q1L8G5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);