// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDubKctuUyp_ZBf-Cqymxr7JW-tecGIv80",
  authDomain: "portfolio-4c44b.firebaseapp.com",
  projectId: "portfolio-4c44b",
  storageBucket: "portfolio-4c44b.appspot.com",
  messagingSenderId: "37190147058",
  appId: "1:37190147058:web:d00e8cf3f8be0bace2a96b",
  measurementId: "G-B2Y73REVND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);