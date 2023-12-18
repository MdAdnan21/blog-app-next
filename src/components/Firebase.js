// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loginsignup-a8b60.firebaseapp.com",
  projectId: "loginsignup-a8b60",
  storageBucket: "loginsignup-a8b60.appspot.com",
  messagingSenderId: "314236174643",
  appId: "1:314236174643:web:e00f26891593009d023e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Pass the app instance to getAuth

export { auth, app };
