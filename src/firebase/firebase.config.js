import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAVPQFTh8Zb8JebPtqCzjSQvh9obVK5Bjo",
    authDomain: "mehedi-6a626.firebaseapp.com",
    projectId: "mehedi-6a626",
    storageBucket: "mehedi-6a626.firebasestorage.app",
    messagingSenderId: "487197223130",
    appId: "1:487197223130:web:dfd1be7d9cbe7b8c005de3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;