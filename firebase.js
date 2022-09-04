// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3_29B4fL8pNLklQ14apEdEN_iIERa8cg",
  authDomain: "qrcode-afc16.firebaseapp.com",
  projectId: "qrcode-afc16",
  storageBucket: "qrcode-afc16.appspot.com",
  messagingSenderId: "678075839772",
  appId: "1:678075839772:web:afa3868e64330b930636d9",
  measurementId: "G-W6GX4B7QBM"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// const storageRef = firebase.storage().ref();



export { db, auth, provider  };


