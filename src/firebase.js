// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqLuiT4py62-fNr8vDJ8TI3DE3ef0UHSE",
  authDomain: "taskmanager-61181.firebaseapp.com",
  projectId: "taskmanager-61181",
  storageBucket: "taskmanager-61181.firebasestorage.app",
  messagingSenderId: "137872438551",
  appId: "1:137872438551:web:a3ca4bb3b9c660ef67b352",
  measurementId: "G-LSB53DJKW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Analytics
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
