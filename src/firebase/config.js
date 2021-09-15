import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCbdnUP_bvmvRJ0mwc0BILWqXL-v3jtRqc",
    authDomain: "survey-pvg.firebaseapp.com",
    projectId: "survey-pvg",
    storageBucket: "survey-pvg.appspot.com",
    messagingSenderId: "214619424197",
    appId: "1:214619424197:web:d7e716d05fd4f74a30f7ac",
    measurementId: "G-8P425RLBGG"
  };
  
firebase.initializeApp(config);
export const db = firebase.firestore();
