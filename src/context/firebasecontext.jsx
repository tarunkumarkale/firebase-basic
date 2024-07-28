import React, { createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../fire/firebase'; // Ensure this path is correct

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const firebaseAuth = getAuth(app);   // for auth first auth we are makeing


// ===========================================================================================
// this is first signup we are making  // 👿 1
const signUpWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};
// ===============================================================================================










export const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ signUpWithEmailAndPassword }}>
    {children}
  </FirebaseContext.Provider>
);
