// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUOP9Rpaw9St2qiDAJLgM7gyymCD02Gpc",
  authDomain: "soccer-f5a16.firebaseapp.com",
  projectId: "soccer-f5a16",
  storageBucket: "soccer-f5a16.appspot.com",
  messagingSenderId: "355587926274",
  appId: "1:355587926274:web:01d6e025ab943b6f4afa1b",
  measurementId: "G-EW7QEH1Z6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);