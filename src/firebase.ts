// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOw81jib_EwWdw4GSg8baonQfgmFFklsw",
  authDomain: "todo-list-svelte-d2860.firebaseapp.com",
  projectId: "todo-list-svelte-d2860",
  storageBucket: "todo-list-svelte-d2860.appspot.com",
  messagingSenderId: "890291744706",
  appId: "1:890291744706:web:5a814cff946bfc5263305b",
  measurementId: "G-S1S5PY9BG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);