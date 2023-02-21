// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6433Z8zKtl-QV2HJRD7EOpYr2_Iq1rSA",
  authDomain: "post-a-blog.firebaseapp.com",
  projectId: "post-a-blog",
  storageBucket: "post-a-blog.appspot.com",
  messagingSenderId: "272474719371",
  appId: "1:272474719371:web:6895c4a062e9c8284b408e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);