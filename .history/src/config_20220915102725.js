import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'
const firebaseConfig ={
    apiKey: "AIzaSyAIIh-rHFLtAygpRamWua5W-Y1umxOMORs",
    authDomain: "voice-rec-4e75d.firebaseapp.com",
    projectId: "voice-rec-4e75d",
    storageBucket: "voice-rec-4e75d.appspot.com",
    messagingSenderId: "725048934859",
    appId: "1:725048934859:web:7ead5bf04b770679af364e",
    measurementId: "G-1LWL5E0M1F"
};

if (firebase.getApps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};