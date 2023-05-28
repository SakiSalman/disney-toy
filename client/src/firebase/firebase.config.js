// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ81Dso9ou0CGMTgdXfghq9kir95yJWV8",
  authDomain: "disneytoy.firebaseapp.com",
  projectId: "disneytoy",
  storageBucket: "disneytoy.appspot.com",
  messagingSenderId: "325058675562",
  appId: "1:325058675562:web:2fa7e92e9548d650651b13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;