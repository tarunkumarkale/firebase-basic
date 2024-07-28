import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4rXzbA-TnDJ3qXVmn2Kyb11J8WZmzXjM",
  authDomain: "marvel-comics-store.firebaseapp.com",
  projectId: "marvel-comics-store",
  storageBucket: "marvel-comics-store.appspot.com",
  messagingSenderId: "838433786783",
  appId: "1:838433786783:web:306c6e2028c627c9680baa",
  databaseURL: "https://marvel-comics-store-default-rtdb.firebaseio.com",   // yeh connect padtha hai alag se testing time ki connect hua ki nahi that why realtimedatabase krana padta hai check
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);