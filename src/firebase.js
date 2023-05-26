// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyChRAa8G-UNRINbw6WqyaC8CZ3ZCHocU2I",
    authDomain: "twitter-clone-ffcb0.firebaseapp.com",
    projectId: "twitter-clone-ffcb0",
    storageBucket: "twitter-clone-ffcb0.appspot.com",
    messagingSenderId: "879940448787",
    appId: "1:879940448787:web:b4ebe757c63413e1a785e6",
    measurementId: "G-YBEJ710PC1"
};


// Initialize Firebase
const app = initializeApp( firebaseConfig );

const analytics = getAnalytics( app );

const db = getFirestore( app );
const auth = getAuth( app );
const storage = getStorage( app )

export default db;
export { auth, analytics, storage };

