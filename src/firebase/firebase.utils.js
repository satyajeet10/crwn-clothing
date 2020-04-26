import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDmYOA_gM4God6kocLn6daB9Rh4PcCYIy4',
  authDomain: 'crwn-db-4fec6.firebaseapp.com',
  databaseURL: 'https://crwn-db-4fec6.firebaseio.com',
  projectId: 'crwn-db-4fec6',
  storageBucket: 'crwn-db-4fec6.appspot.com',
  messagingSenderId: '78106017701',
  appId: '1:78106017701:web:623fc0d0e83cb29973b24c',
  measurementId: 'G-HEVDE5M54N',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
