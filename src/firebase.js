import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDw_GYmn3udKv8tnE8lRD51QPg_sqqnj7w",
    authDomain: "studentmangerapp.firebaseapp.com",
    projectId: "studentmangerapp",
    storageBucket: "studentmangerapp.appspot.com",
    messagingSenderId: "957767717749",
    appId: "1:957767717749:web:b7b0d2a46c12fbc1cd393c",
    measurementId: "G-YKZV9Z5X5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);