// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYDT7Y7OZZQvdQfzlbxAOqNRF-AnnQsb4",
  authDomain: "website-demo-e3d45.firebaseapp.com",
  projectId: "website-demo-e3d45",
  storageBucket: "website-demo-e3d45.appspot.com",
  messagingSenderId: "256880102850",
  appId: "1:256880102850:web:cad3587ccb1c8fe4c21a5b",
  measurementId: "G-H63EZH64LT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(firebaseApp);

const firebaseDb = getFirestore(firebaseApp);

// Initialize Cloud Storage and get a reference to the service
const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp, firebaseAuth, firebaseDb, firebaseStorage };
