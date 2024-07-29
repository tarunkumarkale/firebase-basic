import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { app } from '../fire/firebase'; // Ensure this path is correct

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext); // Custom hook

const firebaseAuth = getAuth(app); // Firebase authentication instance
const provider = new GoogleAuthProvider(); // Google provider instance
const firestore = getFirestore(app); // Firestore instance
const storage = getStorage(app); // Firebase storage instance

// Sign up with email and password
const signUpWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

// Sign in with email and password
const signInWithEmailAndPasswordFunc = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

// Sign in with Google
const signInWithGoogle = () => {
  return signInWithPopup(firebaseAuth, provider);
};

// FirebaseProvider component
export const FirebaseProvider = ({ children }) => {
  // State to track the authenticated user
  const [user, setUser] = useState(null);

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const islogin = !!user; // Convert user object to a boolean

  // Function to create a new book listing
  const handleCreateNewBookListing = async (name, isbn, price, cover) => {
    // First, upload the cover image to storage
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);

    // Then, create a new document in the 'books' collection
    return await addDoc(collection(firestore, 'books'), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      photoURL: user.photoURL,
    });
  };


/// now getdocs  we import for firestore  we use    get back data  from  
 
const getListAllbooks=()=>{
  return getDocs(collection(firestore,'books'))
}

//for image
const getImageUrl=(path)=>{
  return  getDownloadURL(ref(storage,path))
}


  return (
    <FirebaseContext.Provider
      value={{
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword: signInWithEmailAndPasswordFunc,
        signInWithGoogle,
        islogin,
        user,
        handleCreateNewBookListing,
        getListAllbooks,
        getImageUrl
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
