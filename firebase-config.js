// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyC2EYOrnFwjUT9Y2EtAo3W9KQ9eTW60hFs",
  authDomain: "gamified-learning-platfo-c18a4.firebaseapp.com",
  projectId: "gamified-learning-platfo-c18a4",
  storageBucket: "gamified-learning-platfo-c18a4.firebasestorage.app",
  messagingSenderId: "231868760313",
  appId: "1:231868760313:web:447bda0dc41231cd8b6228",
  measurementId: "G-14TXWTYHXN"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
