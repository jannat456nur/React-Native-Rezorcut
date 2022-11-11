import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuth = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuth;
// Initialize Firebase


// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'


// const firebaseConfig = {
//     apiKey: "AIzaSyA_K1qieOA0ZMwuZDNM0DKNql3ICINM0zA",
//     authDomain: "rezorcut.firebaseapp.com",
//     projectId: "rezorcut",
//     storageBucket: "rezorcut.appspot.com",
//     messagingSenderId: "251482183759",
//     appId: "1:251482183759:web:6e5c0ed897c3abc08df23a"
//   };
// const app = initializeApp(firebaseConfig);
// export const authentication = getAuth(app)
