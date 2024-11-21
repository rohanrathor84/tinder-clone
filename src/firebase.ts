import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQhWAPCZguUhkUf5_nMH6_oqkiOrAN_pc",
    authDomain: "tinder-clone-cd08d.firebaseapp.com",
    projectId: "tinder-clone-cd08d",
    storageBucket: "tinder-clone-cd08d.appspot.com",
    messagingSenderId: "253141991235",
    appId: "1:253141991235:web:e8b2788b0f293eecd2b9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Logout function
export const logout = () => signOut(auth);
