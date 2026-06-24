import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvvf2VHBBeQgqcDueirrUlnF8z6b_kdow",
  authDomain: "react-chat-app-2bd78.firebaseapp.com",
  projectId: "react-chat-app-2bd78",
  storageBucket: "react-chat-app-2bd78.firebasestorage.app",
  messagingSenderId: "144915894534",
  appId: "1:144915894534:web:10bc6cb1fbe09f7a3b0e87",
  measurementId: "G-JYBFDPJRWK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

getAnalytics(app);