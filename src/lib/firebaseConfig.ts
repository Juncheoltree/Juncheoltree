import { FirebaseOptions, initializeApp } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA1Y797VlSs1Z3jpP6PugPSSAu5fvS7Uws",
  authDomain: "react-native-last.firebaseapp.com",
  projectId: "react-native-last",
  storageBucket: "react-native-last.appspot.com",
  messagingSenderId: "248712288562",
  appId: "1:248712288562:web:7a3669adaef50baccc5f2b",
  measurementId: "G-G2982JJTLR",
};

export const app = initializeApp(firebaseConfig);
