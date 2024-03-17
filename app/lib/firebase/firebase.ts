// firebaseConfig.js
import { getApp, getApps, initializeApp } from "firebase/app";

import "firebase/auth";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC8OuZUhB-rm3c0gUoc_wSqbe_1ZAE1lP4",
  authDomain: "easy-subsidy.firebaseapp.com",
  projectId: "easy-subsidy",
  storageBucket: "easy-subsidy.appspot.com",
  messagingSenderId: "1098449754739",
  appId: "1:1098449754739:web:700542d8d6729953d22806",
  measurementId: "G-8P7WNBQF5B",
};

export const app = initializeApp(firebaseConfig);
export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp();
