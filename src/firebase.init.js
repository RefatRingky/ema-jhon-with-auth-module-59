// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firbase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LGkC6ECPSQAL3d9tQ0UrwFarsv2Ziyk",
  authDomain: "ema-jhon-simple-95a25.firebaseapp.com",
  projectId: "ema-jhon-simple-95a25",
  storageBucket: "ema-jhon-simple-95a25.appspot.com",
  messagingSenderId: "488389650035",
  appId: "1:488389650035:web:d9c5c384c70743d16bec06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;