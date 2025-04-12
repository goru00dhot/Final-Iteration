// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn26CSp3U7O_0z7P57pzg0uRIuimmrC5U",
  authDomain: "taskmanger-107cc.firebaseapp.com",
  projectId: "taskmanger-107cc",
  storageBucket: "taskmanger-107cc.firebasestorage.app",
  messagingSenderId: "744272327659",
  appId: "1:744272327659:web:f7b7b9fb17fabcef13dfae",
  measurementId: "G-6ZY6LPPBQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Exporting Firebase services for use in other parts of the app
export { app, analytics, db, auth };
