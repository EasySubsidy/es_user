import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC8OuZUhB-rm3c0gUoc_wSqbe_1ZAE1lP4",
  authDomain: "easy-subsidy.firebaseapp.com",
  projectId: "easy-subsidy",
  storageBucket: "easy-subsidy.appspot.com",
  messagingSenderId: "1098449754739",
  appId: "1:1098449754739:web:700542d8d6729953d22806",
};

// Firebaseの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage()

export { db, storage };
