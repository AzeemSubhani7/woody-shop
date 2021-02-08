import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdNESMIq4rgXNE03UwpTLiNun3ADdpBLY",
    authDomain: "woody-shop-db.firebaseapp.com",
    projectId: "woody-shop-db",
    storageBucket: "woody-shop-db.appspot.com",
    messagingSenderId: "825491289208",
    appId: "1:825491289208:web:185a93f58e0c0c4fd8e98d",
    measurementId: "G-GJ6YBSRVEQ"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// The google auth provider class from the authentication library!
const provider = new firebase.auth.GoogleAuthProvider();
// It takes a couple of custom parameters 
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider); // It

export default firebase;