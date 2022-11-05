// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export default app;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArhD87dDDiJvhhYCSoqaf8atN-EuZKlk0",
  authDomain: "todo-list-2fea8.firebaseapp.com",
  projectId: "todo-list-2fea8",
  storageBucket: "todo-list-2fea8.appspot.com",
  messagingSenderId: "575861487100",
  appId: "1:575861487100:web:b7723fa8ec7cd01e30ae79",
  measurementId: "G-438L1ZL8HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
