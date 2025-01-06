// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWvF_P7_tGP4NndFsr2Hex3imCVAvpMXo",
  authDomain: "lisuuu-abffc.firebaseapp.com",
  projectId: "lisuuu-abffc",
  storageBucket: "lisuuu-abffc.appspot.com",
  messagingSenderId: "1097515597458",
  appId: "1:1097515597458:web:a433df72cbd13060e9704b",
  measurementId: "G-EVWY46C75P"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();