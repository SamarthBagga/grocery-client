// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmFqWeYIvKI3x4hgZJst_jeUauXEzQLyU",
  authDomain: "mujfood.firebaseapp.com",
  projectId: "mujfood",
  storageBucket: "mujfood.appspot.com",
  messagingSenderId: "1096183320894",
  appId: "1:1096183320894:web:920a63af665609f7569c6f",
  measurementId: "G-NPXBVLK3DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);