
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotes-9511a.firebaseapp.com",
  projectId: "examnotes-9511a",
  storageBucket: "examnotes-9511a.firebasestorage.app",
  messagingSenderId: "623930025683",
  appId: "1:623930025683:web:297c7a3035ea04e4bc9626"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}