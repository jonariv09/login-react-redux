import { initializeApp } from 'firebase/app';
import { getFirestore, doc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDl4d_yrHuIq9TOxrUcHAK3qXpNtAO5oNU",
  authDomain: "blockchain-test-c02ae.firebaseapp.com",
  projectId: "blockchain-test-c02ae",
  storageBucket: "blockchain-test-c02ae.appspot.com",
  messagingSenderId: "1085333234506",
  appId: "1:1085333234506:web:a564a9f23a9e5c735a97b3",
  measurementId: "G-DVQ0SL51CX"
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase;

export const Database = getFirestore(Firebase);
export const Auth = getAuth(Firebase);
Auth.languageCode = 'it';
export const GoogleProvider = new GoogleAuthProvider()
export const SignInWithPopup = signInWithPopup;
export const Doc = doc;