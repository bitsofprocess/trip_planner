// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAUML9USPbo3eTTB1TIxff6_Q6O_19400",
  authDomain: "vuetrip-f6f4c.firebaseapp.com",
  projectId: "vuetrip-f6f4c",
  storageBucket: "vuetrip-f6f4c.appspot.com",
  messagingSenderId: "636090042699",
  appId: "1:636090042699:web:5b13f9824abdd2f34580ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth }
