// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6RjY0kMBpQpR_oiKQN27Rsqvqpy9o4g",
  authDomain: "sj-portfolio-1f96d.firebaseapp.com",
  projectId: "sj-portfolio-1f96d",
  storageBucket: "sj-portfolio-1f96d.firebasestorage.app",
  messagingSenderId: "617185661177",
  appId: "1:617185661177:web:45da6793ebea408702d228",
  measurementId: "G-SPVDRVYQET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
