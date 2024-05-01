// firebase.js
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = { 
    apiKey: "AIzaSyCPx9nbSlKR8a50a1Rh2fBpUWnEeFy5hOo",
    authDomain: "sunderbanwealdcamp-dev-7f63c.firebaseapp.com",
    projectId: "sunderbanwealdcamp-dev-7f63c",
    storageBucket: "sunderbanwealdcamp-dev-7f63c.appspot.com",
    messagingSenderId: "429043849367",
    appId: "1:429043849367:web:549eb8bca21956699cf1d2",
    measurementId: "G-3S3LCZM8RB"
};

// Initialize Firebase
console.log("firebase",firebase.apps)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const storage = firebase.storage();

