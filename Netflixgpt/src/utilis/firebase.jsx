// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1HPjpOnGvZzAGooslriM9e0VuMyURZdg",
  authDomain: "netflixgpt-e3a56.firebaseapp.com",
  projectId: "netflixgpt-e3a56",
  storageBucket: "netflixgpt-e3a56.appspot.com",
  messagingSenderId: "723245016721",
  appId: "1:723245016721:web:ad628ee2282afae9fd0130",
  measurementId: "G-2FK9VRDL9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();