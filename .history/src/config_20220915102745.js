import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig ={
    apiKey: "AIzaSyAIIh-rHFLtAygpRamWua5W-Y1umxOMORs",
    authDomain: "voice-rec-4e75d.firebaseapp.com",
    projectId: "voice-rec-4e75d",
    storageBucket: "voice-rec-4e75d.appspot.com",
    messagingSenderId: "725048934859",
    appId: "1:725048934859:web:7ead5bf04b770679af364e",
    measurementId: "G-1LWL5E0M1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {auth, db};