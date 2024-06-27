import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO2TUflXlvufCCofbBmUN8Gj1Tpbb-yjk",
  authDomain: "free-play-a899c.firebaseapp.com",
  projectId: "free-play-a899c",
  storageBucket: "free-play-a899c.appspot.com",
  messagingSenderId: "426091506400",
  appId: "1:426091506400:web:e3770a4d4155072ebebe85",
  measurementId: "G-VR7YGD73XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
