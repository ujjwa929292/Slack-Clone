import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBV5-sBQEtbmFmgn1wP7-RNJkpTmZOdRrk",
  authDomain: "slack-clone-37e91.firebaseapp.com",
  projectId: "slack-clone-37e91",
  storageBucket: "slack-clone-37e91.appspot.com",
  messagingSenderId: "223486037221",
  appId: "1:223486037221:web:a0c259e1bc573cd55ad80c",
  measurementId: "G-DFCEHSB2YJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;