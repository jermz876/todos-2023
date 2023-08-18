import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsz093PuAr9GSbSqQs9CHv_PPGLyUDZa0",
    authDomain: "next-todo-fb132.firebaseapp.com",
    projectId: "next-todo-fb132",
    storageBucket: "next-todo-fb132.appspot.com",
    messagingSenderId: "914325892578",
    appId: "1:914325892578:web:4750699dc86860a6edddbb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
