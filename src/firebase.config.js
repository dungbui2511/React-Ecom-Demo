// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD76-OhRzPSu-w2eGo3uoSRyyF-G6HJ-zQ",
  authDomain: "ecom-app-32c1b.firebaseapp.com",
  projectId: "ecom-app-32c1b",
  storageBucket: "ecom-app-32c1b.appspot.com",
  messagingSenderId: "240930214430",
  appId: "1:240930214430:web:1e1da6282af9aca69a940f",
  measurementId: "G-95WXC38CSV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
