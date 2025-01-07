import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASy3Tnss3XnuaUtGydb5gtnWsrEhzN02c",
  authDomain: "portfolio-57a27.firebaseapp.com",
  projectId: "portfolio-57a27",
  storageBucket: "portfolio-57a27.firebasestorage.app",
  messagingSenderId: "164441928658",
  appId: "1:164441928658:web:dbc897e77f80173f7c4e0b",
  measurementId: "G-LL2SKNN0HM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

