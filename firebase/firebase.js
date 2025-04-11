// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firestore related imports
import { getFirestore } from "firebase/firestore";
// If you want to use authentication, add these imports
// import { getAuth } from "firebase/auth";

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

// Initialize Firestore
const db = getFirestore(app);

// Optionally, initialize Firebase Analytics and Auth
const analytics = getAnalytics(app);
// const auth = getAuth(app);

// Export db, auth, and analytics to use in other parts of the app
export { db, analytics };
// export { auth }; // Uncomment if using authentication
