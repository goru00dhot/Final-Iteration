import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBn26CSp3U7O_0z7P57pzg0uRIuimmrC5U",
  authDomain: "taskmanger-107cc.firebaseapp.com",
  projectId: "taskmanger-107cc",
  storageBucket: "taskmanger-107cc.firebasestorage.app",
  messagingSenderId: "744272327659",
  appId: "1:744272327659:web:f7b7b9fb17fabcef13dfae",
  measurementId: "G-6ZY6LPPBQM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.log('The current browser doesn\'t support all of the features required to enable persistence');
    }
  });

export { db };