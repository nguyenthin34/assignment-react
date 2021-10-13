// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPwu-WLsUyLscyWrAbrNFNgBQ2erRr4Lo",
  authDomain: "signin-5167d.firebaseapp.com",
  projectId: "signin-5167d",
  storageBucket: "signin-5167d.appspot.com",
  messagingSenderId: "175162442161",
  appId: "1:175162442161:web:c8f85d1f412c66ccf83d90",
  measurementId: "G-KZFVEJ6RF8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
