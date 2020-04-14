import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD22fTOFybyqJycBMamYjth5ETqCMO9fIE",
  authDomain: "crown-db-2e386.firebaseapp.com",
  databaseURL: "https://crown-db-2e386.firebaseio.com",
  projectId: "crown-db-2e386",
  storageBucket: "crown-db-2e386.appspot.com",
  messagingSenderId: "672921288934",
  appId: "1:672921288934:web:f5fbb0fab9015a15357b27",
  measurementId: "G-0M9DK5GKVS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;    