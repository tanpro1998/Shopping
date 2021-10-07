// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN2WIarBJITuH1qnhr8fP7_jiDZIzWJHw",
  authDomain: "shop-fcec2.firebaseapp.com",
  projectId: "shop-fcec2",
  storageBucket: "shop-fcec2.appspot.com",
  messagingSenderId: "19544726472",
  appId: "1:19544726472:web:c966d2c46839440b35fefd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;