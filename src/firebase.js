// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmX-kbaE6r1ElbwPpJLuJo9B8TAbxnvYI",
    authDomain: "clone-dinoko.firebaseapp.com",
    projectId: "clone-dinoko",
    storageBucket: "clone-dinoko.appspot.com",
    messagingSenderId: "602913570958",
    appId: "1:602913570958:web:2ba80d0196f1f6822909df",
    measurementId: "G-LGKBW4BTBX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };