import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig ={
    apiKey: "AIzaSyA_K1qieOA0ZMwuZDNM0DKNql3ICINM0zA",
    authDomain: "rezorcut.firebaseapp.com",
    projectId: "rezorcut",
    storageBucket: "rezorcut.appspot.com",
    messagingSenderId: "251482183759",
    appId: "1:251482183759:web:6e5c0ed897c3abc08df23a"
}


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};